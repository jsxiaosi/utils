interface IndexConfig {
  indexName: string;
  keyPath: string | string[];
  options?: IDBIndexParameters;
}

interface StoreConfig<T extends Record<string, any>, U extends keyof T> {
  storeName: Extract<U, string>;
  keyPath: string | string[];
  autoIncrement?: boolean;
  indexConfigs?: IndexConfig[];
}

interface IndexedDBHelperOptions<T extends Record<string, any>> {
  storeConfigs?: StoreConfig<T, keyof T>[];
  upgradeneeded?: (db: IDBDatabase, oldVersion: number, newVersion: number | null) => void;
  blocked?: (oldVersion: number, newVersion: number | null, event: IDBVersionChangeEvent) => void;
}

export class IndexedDBHelper<T extends Record<string, any>> {
  dbName: string;
  version: number;
  dbPromise: Promise<IDBDatabase>;
  dbRequest: IDBOpenDBRequest;

  constructor(dbName: string, version: number, options: IndexedDBHelperOptions<T>) {
    const { storeConfigs, blocked, upgradeneeded } = options;
    this.dbName = dbName;
    this.version = version;
    this.dbRequest = indexedDB.open(this.dbName, this.version);

    this.dbPromise = new Promise((resolve, reject) => {
      const request = this.dbRequest;

      request.onerror = (event: Event) => reject((event.target as IDBOpenDBRequest).error);
      request.onsuccess = () => resolve(request.result);
      request.onblocked = (event) => blocked && blocked(event.oldVersion, event.newVersion, event);
      request.onupgradeneeded = (event) => {
        const db = request.result;

        if (upgradeneeded) {
          upgradeneeded(db, event.oldVersion, event.newVersion);
        }

        if (storeConfigs) {
          storeConfigs.forEach(({ storeName, keyPath, autoIncrement, indexConfigs }) => {
            if (!db.objectStoreNames.contains(storeName)) {
              const objectStore = db.createObjectStore(storeName, { keyPath, autoIncrement });
              indexConfigs?.forEach(({ indexName, keyPath, options }) => {
                objectStore.createIndex(indexName, keyPath, options);
              });
            }
          });
        }
      };
    });
  }

  public async add<K extends keyof T>(storeName: Extract<K, string>, data: T[K]) {
    const db = await this.dbPromise;
    const transaction = db?.transaction([storeName], 'readwrite');
    const store = transaction?.objectStore(storeName);
    store?.add(data);
  }

  public async update<K extends keyof T>(storeName: Extract<K, string>, data: T[K]) {
    const db = await this.dbPromise;
    const transaction = db.transaction([storeName], 'readwrite');
    const store = transaction?.objectStore(storeName);
    store?.put(data);
  }

  public async delete<K extends keyof T>(storeName: Extract<K, string>, id: string | number) {
    const db = await this.dbPromise;
    const transaction = db.transaction([storeName], 'readwrite');
    const store = transaction?.objectStore(storeName);
    store?.delete(id);
  }

  public async get<K extends keyof T>(storeName: Extract<K, string>, id: string | number): Promise<T[K]> {
    const db = await this.dbPromise;
    return new Promise<any>((resolve, reject) => {
      try {
        const transaction = db.transaction([storeName], 'readonly');
        const store = transaction?.objectStore(storeName);
        const request = store?.get(id);

        request?.addEventListener('success', (event: any) => {
          resolve(event.target.result);
        });
      } catch (error) {
        reject((error as Error).message);
      }

      // request?.addEventListener('error', (event: any) => {
      //   reject(event.target.error);
      // });
    });
  }

  public async getByIndex<K extends keyof T>(
    storeName: Extract<K, string>,
    indexName: string,
    indexValue: string | number,
  ): Promise<T[K]> {
    const db = await this.dbPromise;
    return new Promise<any>((resolve, reject) => {
      try {
        const transaction = db.transaction([storeName], 'readonly');
        transaction.addEventListener('error', (event: any) => reject(event.target.error));
        const store = transaction?.objectStore(storeName);
        const index = store?.index(indexName);
        const request = index?.get(indexValue);

        request?.addEventListener('success', (event: any) => {
          resolve(event.target.result);
        });
      } catch (error) {
        reject((error as Error).message);
      }
      // request?.addEventListener('error', (event: any) => {
      //   reject(event.target.error);
      // });
    });
  }
}

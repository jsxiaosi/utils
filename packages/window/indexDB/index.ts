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

export class IndexedDBHelper<T extends Record<string, any>> {
  dbName: string;
  version: number;
  dbPromise: Promise<IDBDatabase>;

  constructor(dbName: string, version: number, storeConfigs: StoreConfig<T, keyof T>[]) {
    this.dbName = dbName;
    this.version = version;
    this.dbPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);
      request.onerror = () => reject('Error opening database');
      request.onsuccess = () => resolve(request.result);
      request.onupgradeneeded = () => {
        const db = request.result;
        storeConfigs.forEach(({ storeName, keyPath, autoIncrement, indexConfigs }) => {
          if (!db.objectStoreNames.contains(storeName)) {
            const objectStore = db.createObjectStore(storeName, { keyPath, autoIncrement });
            indexConfigs?.forEach(({ indexName, keyPath, options }) => {
              objectStore.createIndex(indexName, keyPath, options);
            });
          }
        });
        resolve(db);
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

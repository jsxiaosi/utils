import type { TabCommunicatorDataType, TabCommunicatorType } from '..';

export class LocalStorageCommunicator<T extends Record<string, any>> implements TabCommunicatorType<T> {
  private key: string;
  private callback?: (data: TabCommunicatorDataType<T>) => void;

  constructor(key: string) {
    this.key = key;
    window.addEventListener('storage', (event) => this._onStorage(event));
  }

  send(data: TabCommunicatorDataType<T>): void {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  onReceive(callback: (data: TabCommunicatorDataType<T>) => void): void {
    this.callback = callback;
  }

  _onStorage(event: StorageEvent): void {
    if (event.key === this.key && this.callback) {
      const data = JSON.parse(event.newValue as string);
      this.callback(data);
    }
  }

  destroy(): void {
    window.removeEventListener('storage', (event) => this._onStorage(event));
  }
}

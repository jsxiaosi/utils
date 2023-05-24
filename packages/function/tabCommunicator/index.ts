import { BroadcastChannelCommunicator } from './communicator/broadcastChannel';
import { LocalStorageCommunicator } from './communicator/localStorage';

export interface TabCommunicatorDataType<T> {
  event: keyof T;
  payload: T[keyof T];
}

type SendEvent<T> = <K extends keyof T>(data: { event: K; payload: T[K] }) => void;
type ReceiveEvent<T> = (callback: (data: TabCommunicatorDataType<T>) => void) => void;

export interface TabCommunicatorType<T extends Record<string, any>> {
  send: SendEvent<T>;
  onReceive: ReceiveEvent<T>;
  destroy(): void;
}

export class TabCommunicator<T extends Record<string, any> = Record<string, any>> {
  private tabComm: TabCommunicatorType<T>;
  private listeners: { [K in keyof T]?: ((data: T[K]) => void)[] } = {};

  constructor(key: string) {
    if (typeof BroadcastChannel !== 'undefined') {
      this.tabComm = new BroadcastChannelCommunicator(key);
    } else {
      this.tabComm = new LocalStorageCommunicator(key);
    }
    this.tabComm.onReceive((data) => {
      const listeners = this.listeners[data.event];
      if (listeners) {
        listeners.forEach((callback) => callback(data.payload));
      }
    });
  }

  emit<K extends keyof T>(event: K, payload: T[K]): void {
    this.tabComm.send({ event, payload });
  }

  on<K extends keyof T>(event: K, callback: (data: T[K]) => void): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event]?.push(callback);
  }

  off(event: string, callback?: (data: T) => void): void {
    if (this.listeners[event]) {
      if (callback) {
        const index = this.listeners[event]?.indexOf(callback) || -1;
        if (index !== -1) {
          this.listeners[event]?.splice(index, 1);
        }
      } else {
        this.removeAllListeners(event);
      }
    }
  }

  getAllListeners(): { [K in keyof T]?: ((data: T[K]) => void)[] } {
    return this.listeners;
  }

  removeAllListeners<K extends keyof T>(event: K) {
    if (this.listeners[event]) {
      this.listeners[event] = [];
      delete this.listeners[event];
    }
  }

  destroy(): void {
    this.tabComm.destroy();
    this.listeners = {};
  }
}

import type { TabCommunicatorDataType, TabCommunicatorType } from '..';

export class BroadcastChannelCommunicator<T extends Record<string, any>> implements TabCommunicatorType<T> {
  private channel: BroadcastChannel;
  private callback?: (data: TabCommunicatorDataType<T>) => void;

  constructor(key: string) {
    this.channel = new BroadcastChannel(key);
    this.channel.onmessage = (event) => this._onMessage(event);
  }

  send(data: TabCommunicatorDataType<T>): void {
    this.channel.postMessage(data);
  }

  onReceive(callback: (data: TabCommunicatorDataType<T>) => void): void {
    this.callback = callback;
  }

  _onMessage(event: MessageEvent): void {
    if (this.callback) {
      this.callback(event.data);
    }
  }

  destroy(): void {
    this.channel.onmessage = null;
    this.channel.close();
  }
}

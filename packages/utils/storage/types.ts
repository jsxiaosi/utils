export type StorageValue<T> = T | null | undefined;

export type StorageType = 'localStorage' | 'sessionStorage';

export interface StorageConfig {
  prefix: string;
  expire: number;
  isEncrypt: boolean;
  secret_key: string;
  secret_iv: string;
}

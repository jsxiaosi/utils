export type StorageValue<T> = T | null | undefined;

export type StorageType = 'localStorage' | 'sessionStorage';

export interface StorageConfig {
  prefix: string | ((key: string) => string);
  expire: number;
  isEncrypt: boolean;
  secretKey: string;
  secretIv: string;
}

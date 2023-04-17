import CryptoJS from 'crypto-js';
import type { StorageConfig, StorageType, StorageValue } from './types';

// 类型 window.localStorage,window.sessionStorage,
const defConfig: StorageConfig = {
  prefix: 'xiaosiAdmin', // 名称前缀 建议：项目名 + 项目版本
  expire: 0, //过期时间 单位：秒
  isEncrypt: false, // 默认加密 为了调试方便, 开发过程中可以不加密
  secret_key: '3333e6e143439161',
  secret_iv: 'e3bbe7e3ba84431a',
};

class Storage {
  public config: StorageConfig;

  constructor(instanceConfig: StorageConfig) {
    this.config = instanceConfig;
  }

  /**
   * 解密方法
   * @param data
   * @returns {string}
   */
  private decrypt(data: string): string {
    // 十六位十六进制数作为密钥
    const SECRET_KEY = CryptoJS.enc.Utf8.parse(this.config.secret_key);
    // 十六位十六进制数作为密钥偏移量
    const SECRET_IV = CryptoJS.enc.Utf8.parse(this.config.secret_iv);
    const encryptedHexStr = CryptoJS.enc.Hex.parse(data);
    const str = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    const decrypt = CryptoJS.AES.decrypt(str, SECRET_KEY, {
      iv: SECRET_IV,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
  }

  /**
   * 加密方法
   * @param data
   * @returns {string}
   */
  private encrypt(data: string): string {
    // 十六位十六进制数作为密钥
    const SECRET_KEY = CryptoJS.enc.Utf8.parse(this.config.secret_key);
    // 十六位十六进制数作为密钥偏移量
    const SECRET_IV = CryptoJS.enc.Utf8.parse(this.config.secret_iv);
    const dataHex = CryptoJS.enc.Utf8.parse(data);
    const encrypted = CryptoJS.AES.encrypt(dataHex, SECRET_KEY, {
      iv: SECRET_IV,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.ciphertext.toString();
  }

  // 根据请求配置替换默认config
  public setStorageConfig(info: Partial<StorageConfig>) {
    this.config = { ...this.config, ...info };
  }

  // 判断是否支持 Storage
  public isSupportStorage() {
    return typeof Storage !== 'undefined';
  }

  // 设置 setStorage
  public setStorage<T>(key: string, value: StorageValue<T>, expire = 0, type: StorageType = 'localStorage') {
    if (value === null || value === undefined) {
      value = null;
    }

    if (isNaN(expire) || expire < 0) throw new Error('Expire 必须是数字');

    if (this.config.expire > 0 || expire > 0) expire = (expire ? expire : this.config.expire) * 1000;
    const data = {
      value: value, // 存储值
      time: Date.now(), //存值时间戳
      expire: expire, // 过期时间
    };

    const encryptString = this.config.isEncrypt ? this.encrypt(JSON.stringify(data)) : JSON.stringify(data);
    window[type].setItem(this.autoAddPrefix(key), encryptString);
  }

  // 获取 getStorage
  public getStorage<T>(key: string, type: StorageType = 'localStorage'): StorageValue<T> {
    key = this.autoAddPrefix(key);
    // key 不存在判断
    if (!window[type].getItem(key) || JSON.stringify(window[type].getItem(key)) === 'null') {
      return null;
    }

    try {
      // 优化 持续使用中续期
      const storage = this.config.isEncrypt
        ? JSON.parse(this.decrypt(window[type].getItem(key) as string))
        : JSON.parse(window[type].getItem(key) as string);

      const nowTime = Date.now();
      // 过期删除
      if (storage.expire && this.config.expire * 6000 < nowTime - storage.time) {
        this.removeStorage(key);
        return null;
      } else {
        // 未过期期间被调用 则自动续期 进行保活
        this.setStorage(this.autoRemovePrefix(key), storage.value);
        return storage.value;
      }
    } catch {
      console.error(key, '解密失败');
      return null;
    }
  }

  // 是否存在 hasStorage
  public hasStorage(key: string, type: StorageType = 'localStorage'): boolean {
    key = this.autoAddPrefix(key);
    const arr = this.getStorageAll(type).filter((item) => {
      return item.key === key;
    });
    return arr.length ? true : false;
  }

  // 获取所有key
  public getStorageKeys(type: StorageType = 'localStorage'): (string | null)[] {
    const items = this.getStorageAll(type);
    const keys: string[] = [];
    for (let index = 0; index < items.length; index++) {
      keys.push(items[index].key);
    }
    return keys;
  }

  // 根据索引获取key
  public getStorageForIndex(index: number, type: StorageType = 'localStorage') {
    return window[type].key(index);
  }

  // 获取localStorage长度
  public getStorageLength(type: StorageType = 'localStorage') {
    return window[type].length;
  }

  // 获取全部 getAllStorage
  public getStorageAll(type: StorageType = 'localStorage'): { key: string; val: string | null }[] {
    const len = window[type].length; // 获取长度
    const arr: { key: string; val: string | null }[] = []; // 定义数据集
    for (let i = 0; i < len; i++) {
      // 获取key 索引从0开始
      const getKey = window[type].key(i) as string;
      // 获取key对应的值
      const getVal = window[type].getItem(getKey);
      // 放进数组
      arr[i] = { key: getKey, val: getVal };
    }
    return arr;
  }

  // 删除 removeStorage
  public removeStorage(key: string, type: StorageType = 'localStorage') {
    window[type].removeItem(this.autoAddPrefix(key));
  }

  // 清空 clearStorage
  public clearStorage(type: StorageType = 'localStorage') {
    window[type].clear();
  }

  // 名称前自动添加前缀
  public autoAddPrefix(key: string): string {
    const prefix = this.config.prefix ? this.config.prefix + '_' : '';
    return prefix + key;
  }

  // 移除已添加的前缀
  public autoRemovePrefix(key: string) {
    const len = this.config.prefix ? this.config.prefix.length + 1 : 0;
    return key.substring(len);
  }
}

const _storage = new Storage(defConfig);

export { _storage };

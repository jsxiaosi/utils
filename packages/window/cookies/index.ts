export interface CookiesOptions {
  expires?: number;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'None' | 'Lax' | 'Strict';
}

export const cookies = {
  // 设置cookie
  set(name: string, value: string, options: CookiesOptions = {}): void {
    const { expires, path = '/', domain, secure = false, sameSite = 'Lax' } = options;
    let realExpires = '';
    if (expires) {
      const date = new Date();
      date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
      realExpires = '; expires=' + date.toUTCString();
    }
    document.cookie =
      name +
      '=' +
      (value || '') +
      realExpires +
      '; path=' +
      path +
      (domain ? '; domain=' + domain : '') +
      (secure ? '; secure' : '') +
      '; sameSite=' +
      sameSite;
  },

  // 获取cookie
  get(name?: string): string | null | { [key: string]: string } {
    if (name) {
      const nameEQ = name + '=';
      const ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    } else {
      const pairs = document.cookie.split('; ');
      const cookies: { [key: string]: string } = {};
      for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i].split('=');
        cookies[pair[0]] = pair[1];
      }
      return cookies;
    }
  },

  // 删除cookie
  remove(name?: string, options: CookiesOptions = {}): void {
    if (name) {
      const { path = '/', domain } = options;
      document.cookie = name + '=; Max-Age=-99999999; path=' + path + (domain ? '; domain=' + domain : '');
    } else {
      const cookies = document.cookie.split('; ');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
      }
    }
  },
};

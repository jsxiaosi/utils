export interface BrowserInfo {
  browserName: string;
  browserVersion: string;
  operatingSystem: string;
}

export function getBrowserInfo(): BrowserInfo {
  const userAgent = navigator.userAgent;
  let browserName = 'Unknown';
  let browserVersion = 'Unknown';
  let operatingSystem = 'Unknown';

  // 获取浏览器名称和版本
  const browserInfo = [
    { name: 'Chrome', rule: /Chrome\/([\d.]+)/ },
    { name: 'Firefox', rule: /Firefox\/([\d.]+)/ },
    { name: 'Safari', rule: /Version\/([\d.]+).*Safari/ },
    { name: 'Edge', rule: /Edg\/([\d.]+)/ },
    { name: 'IE', rule: /MSIE ([\d.]+)/ },
    { name: 'Opera', rule: /OPR\/([\d.]+)/ },
    { name: 'Samsung Internet', rule: /SamsungBrowser\/([\d.]+)/ },
    { name: 'UC Browser', rule: /UCBrowser\/([\d.]+)/ },
    { name: 'QQ Browser', rule: /QQBrowser\/([\d.]+)/ },
    { name: 'Baidu Browser', rule: /BIDUBrowser\/([\d.]+)/ },
    { name: 'Sogou Browser', rule: /SE ([\d.X]+)/ },
    { name: 'Yandex Browser', rule: /YaBrowser\/([\d.]+)/ },
    { name: 'Brave', rule: /Brave\/([\d.]+)/ },
    { name: 'WeChat', rule: /MicroMessenger\/([\d.]+)/ },
    { name: 'DingTalk', rule: /DingTalk\/([\d.]+)/ },
  ];

  for (const { name, rule } of browserInfo) {
    const match = userAgent.match(rule);
    if (match) {
      browserName = name;
      browserVersion = match[1];
      break;
    }
  }

  // 获取操作系统
  const osInfo = [
    { name: 'Windows', rule: /Windows/i },
    { name: 'Mac OS', rule: /Macintosh/i },
    { name: 'Linux', rule: /Linux/i },
    { name: 'Android', rule: /Android/i },
    { name: 'iOS', rule: /iPhone|iPad|iPod/i },
    { name: 'Windows Phone', rule: /Windows Phone/i },
    { name: 'BlackBerry', rule: /BlackBerry/i },
    { name: 'Symbian', rule: /Symbian/i },
    { name: 'Chrome OS', rule: /CrOS/i },
  ];

  for (const { name, rule } of osInfo) {
    if (rule.test(userAgent)) {
      operatingSystem = name;
      break;
    }
  }

  return { browserName, browserVersion, operatingSystem };
}

type DeviceType = 'Mobile' | 'Desktop' | 'Unknown';

export function getDeviceType(): DeviceType {
  const userAgent = navigator.userAgent;

  if (/(android|iphone|ipad|ipod|windows phone|blackberry|symbian|mobile)/i.test(userAgent)) {
    return 'Mobile';
  } else if (/(windows|macintosh|linux|chromeos|desktop)/i.test(userAgent)) {
    return 'Desktop';
  }

  return 'Unknown';
}

// 屏幕指纹
export function getWindowScreenFingerprint(): Omit<Screen, 'availHeight' | 'availWidth' | 'orientation'> {
  const screen = window.screen;
  const screenInfo = {
    // 屏幕宽度
    width: screen.width,
    // 屏幕高度
    height: screen.height,
    // 颜色深度
    colorDepth: screen.colorDepth,
    // 屏幕的像素点
    pixelDepth: screen.pixelDepth,
  };

  return screenInfo;
}

export function getHasSessionStorage(): boolean {
  try {
    return !!window.sessionStorage;
  } catch (error) {
    /* SecurityError when referencing it means it exists */
    return true;
  }
}

// https://bugzilla.mozilla.org/show_bug.cgi?id=781447
export function getHasLocalStorage(): boolean {
  try {
    return !!window.localStorage;
  } catch (e) {
    /* SecurityError when referencing it means it exists */
    return true;
  }
}

export function getHasAreCookiesEnabled(): boolean {
  const d = document;
  try {
    // Create cookie
    d.cookie = 'cookietest=1; SameSite=Strict;';
    const result = d.cookie.indexOf('cookietest=') !== -1;
    // Delete cookie
    d.cookie = 'cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT';
    return result;
  } catch (e) {
    return false;
  }
}

export function getHasIndexedDB(): boolean {
  try {
    return !!window.indexedDB;
  } catch (e) {
    /* SecurityError when referencing it means it exists */
    return true;
  }
}

// https://fingerprint.com/blog/audio-fingerprinting/
export function getAudioFingerprint(): Promise<number> {
  return new Promise<number>((resolve) => {
    const AudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;
    const context = new AudioContext(1, 5000, 44100);
    const oscillator = context.createOscillator();
    oscillator.type = 'triangle';
    oscillator.frequency.value = 1000;
    const compressor = context.createDynamicsCompressor();
    compressor.threshold.value = -50;
    compressor.knee.value = 40;
    compressor.ratio.value = 12;
    compressor.attack.value = 0;
    compressor.release.value = 0.2;
    oscillator.connect(compressor);
    compressor.connect(context.destination);
    oscillator.start();
    context.oncomplete = (event) => {
      // We have only one channel, so we get it by index
      const samples = event.renderedBuffer.getChannelData(0);
      resolve(getHash(samples));
    };
    context.startRendering();
  });
}

function getHash(signal: ArrayLike<number>): number {
  let hash = 0;
  for (let i = 0; i < signal.length; ++i) {
    hash += Math.abs(signal[i]);
  }
  return hash;
}

const windowFingerprint = {
  screen: getWindowScreenFingerprint,
  sessionStorage: getHasSessionStorage,
  localStorage: getHasLocalStorage,
  cookies: getHasAreCookiesEnabled,
  indexedDB: getHasIndexedDB,
  audio: getAudioFingerprint,
};

export default windowFingerprint;

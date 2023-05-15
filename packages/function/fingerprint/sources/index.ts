import navigatorFingerprint from './browser';
import demoFingerprint from './canvas';
import windowFingerprint from './window';

export const fingerprintInfo = {
  ...navigatorFingerprint,
  ...demoFingerprint,
  ...windowFingerprint,
};

export type FingerprintInfo = {
  [K in keyof typeof fingerprintInfo]: ReturnType<(typeof fingerprintInfo)[K]>;
};

export type FingerprintOptionFlags = {
  [K in keyof typeof fingerprintInfo]?: Boolean;
};

import { x64hash128 } from './hashing';
import type { FingerprintInfo, FingerprintOptionFlags } from './sources';
import { fingerprintInfo } from './sources';

export async function getAllFingerprintInfo(): Promise<FingerprintInfo> {
  const fingerprintObj: Record<keyof FingerprintInfo, any> = {} as any;

  for (const key in fingerprintInfo) {
    const fingerprintKey = key as keyof typeof fingerprintInfo;
    fingerprintObj[fingerprintKey] = await fingerprintInfo[fingerprintKey]();
  }

  return fingerprintObj;
}

export async function getFingerprintId(options: FingerprintOptionFlags = {}): Promise<string> {
  return x64hash128(fingerprintInfoToString(await getAllFingerprintInfo(), options));
}

function fingerprintInfoToString(fingerprintInfo: FingerprintInfo, options: FingerprintOptionFlags = {}) {
  let result = '';
  for (const key of Object.keys(fingerprintInfo).sort()) {
    const fingerprintInfoKey = key as keyof FingerprintInfo;
    if (options[fingerprintInfoKey] || options[fingerprintInfoKey] === undefined) {
      const fingerprint = fingerprintInfo[fingerprintInfoKey];
      const value = JSON.stringify(fingerprint);
      result += `${result ? '|' : ''}${fingerprintInfoKey}:${value}`;
    }
  }
  return result;
}

export type { FingerprintInfo, FingerprintOptionFlags };

// 通用的脱敏方法
export function mask(str: string, start: number, end: number, maskChar = '*'): string {
  if (start >= end || start < 0 || end > str.length) {
    return str;
  }
  const head = str.slice(0, start);
  const tail = str.slice(end);
  const mask = maskChar.repeat(end - start);
  return head + mask + tail;
}

// 手机号码脱敏
export function maskMobile(mobile: string, maskChar = '*'): string {
  return mask(mobile, 3, 7, maskChar);
}

// 邮箱脱敏
export function maskEmail(email: string, maskChar = '*'): string {
  const atPos = email.indexOf('@');
  if (atPos < 0) return email;
  const prefix = email.slice(0, atPos);
  const suffix = email.slice(atPos);
  const prefixLen = prefix.length;
  if (prefixLen <= 2) {
    return prefix.charAt(0) + '*' + suffix;
  } else {
    return mask(prefix, prefixLen / 2, prefixLen, maskChar) + suffix;
  }
}

// 身份证号码脱敏
export function maskIdCard(idCard: string, maskChar = '*'): string {
  return mask(idCard, 3, 14, maskChar);
}

import { describe, expect, it } from 'vitest';

import { mask, maskMobile, maskEmail, maskIdCard } from '..';

describe('mask', () => {
  it('should return the same string if start >= end or start < 0 or end > str.length', () => {
    expect(mask('abcdefg', 3, 2)).toBe('abcdefg');
    expect(mask('abcdefg', -1, 2)).toBe('abcdefg');
    expect(mask('abcdefg', 0, 8)).toBe('abcdefg');
  });

  it('should return the masked string with the maskChar', () => {
    expect(mask('abcdefg', 2, 5)).toBe('ab***fg');
    expect(mask('123456789', 3, 7, '#')).toBe('123####89');
  });
});

describe('maskMobile', () => {
  it('should return the masked mobile number', () => {
    expect(maskMobile('13900000000')).toBe('139****0000');
    expect(maskMobile('13800138000')).toBe('138****8000');
  });
});

describe('maskEmail', () => {
  it('should return the same string if email does not contain "@"', () => {
    expect(maskEmail('abcdefg')).toBe('abcdefg');
  });

  it('should mask the prefix part of email if prefix length is greater than 3', () => {
    expect(maskEmail('abc123@qq.com')).toBe('abc***@qq.com');
    expect(maskEmail('abcdefg1234@qq.com')).toBe('abcde*****@qq.com');
  });

  it('should mask only the first character of prefix if prefix length is 3 or less', () => {
    expect(maskEmail('ab@qq.com')).toBe('a*@qq.com');
    expect(maskEmail('a@qq.com')).toBe('a*@qq.com');
  });
});

describe('maskIdCard', () => {
  it('should return the masked id card number', () => {
    expect(maskIdCard('110101199901011234')).toBe('110***********1234');
  });
});

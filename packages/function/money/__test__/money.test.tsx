import { describe, expect, it } from 'vitest';

import { amountSeparator, formatDecimal, centsToYuan, yuanToCents, toChineseUpper } from '..';

describe('money', () => {
  describe('amountSeparator', () => {
    it('should add thousand separators to integer part', () => {
      expect(amountSeparator(123456789)).toBe('123,456,789');
      expect(amountSeparator('123456789')).toBe('123,456,789');
    });

    it('should add thousand separators and keep decimal part', () => {
      expect(amountSeparator(1234567.89)).toBe('1,234,567.89');
      expect(amountSeparator('1234567.89')).toBe('1,234,567.89');
    });
  });

  describe('formatDecimal', () => {
    it('should format decimal with specified number of decimal places', () => {
      expect(formatDecimal(1234.5678, 2)).toBe('1234.57');
      expect(formatDecimal('1234.5678', 2)).toBe('1234.57');
    });

    it('should format integer as decimal with specified number of decimal places', () => {
      expect(formatDecimal(1234, 2)).toBe('1234.00');
      expect(formatDecimal('1234', 2)).toBe('1234.00');
    });
  });

  describe('centsToYuan', () => {
    it('should convert cents to yuan', () => {
      expect(centsToYuan(12345)).toBe(123.45);
      expect(centsToYuan('12345')).toBe(123.45);
    });
  });

  describe('yuanToCents', () => {
    it('should convert yuan to cents', () => {
      expect(yuanToCents(123.45)).toBe(12345);
      expect(yuanToCents('123.45')).toBe(12345);
    });
  });

  describe('toChineseUpper', () => {
    it('should convert amount to upper case Chinese RMB', () => {
      expect(toChineseUpper(123456)).toEqual('壹拾贰万叁仟肆佰伍拾陆元整');
      expect(toChineseUpper(100100)).toEqual('壹拾万零壹佰元整');
      expect(toChineseUpper(0.11)).toEqual('壹角壹分');
      expect(toChineseUpper(0)).toEqual('零元整');
    });
  });
});

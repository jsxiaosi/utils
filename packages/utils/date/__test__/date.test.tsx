import { describe, expect, test } from 'vitest';
import type { ComparisonType } from '..';
import { isNormalDate, parseDateTime, parseDate, isDateTimeInRange, isDateInRange, compareDates } from '..';

describe('DateTime Utils', () => {
  describe('isNormalDate', () => {
    test('should return true for a valid date', () => {
      expect(isNormalDate(new Date())).toBeTruthy();
    });

    test('should return false for an invalid date', () => {
      expect(isNormalDate(new Date('invalid'))).toBeFalsy();
    });

    test('should return false for null', () => {
      expect(isNormalDate(null as unknown as Date)).toBeFalsy();
    });

    test('should return false for undefined', () => {
      expect(isNormalDate(undefined as unknown as Date)).toBeFalsy();
    });

    test('should return false for an object', () => {
      expect(isNormalDate({} as unknown as Date)).toBeFalsy();
    });
  });

  describe('parseDate', () => {
    test('should correctly parse date string with date and time', () => {
      const dateStr = '2022-12-01 13:30:00.000';
      const expectedDate = new Date(2022, 11, 1, 13, 30, 0, 0);
      expect(parseDate(dateStr)).toEqual(expectedDate);
    });

    test('should correctly parse date string with only date', () => {
      const dateStr = '2022-12-01';
      const expectedDate = new Date(2022, 11, 1, 0, 0, 0, 0);
      expect(parseDate(dateStr)).toEqual(expectedDate);
    });

    test('should support date string with "/" delimiter', () => {
      const dateStr = '2022/12/01';
      const expectedDate = new Date(2022, 11, 1, 0, 0, 0, 0);
      expect(parseDate(dateStr)).toEqual(expectedDate);
    });

    test('should return the input if already a Date', () => {
      const date = new Date();
      expect(parseDate(date)).toEqual(date);
    });

    test('If a year is passed in, the date should be returned normally', () => {
      const dateStr = '2022//';
      const expectedDate = new Date(2022, 0, 1, 0, 0, 0, 0);
      expect(parseDate(dateStr)).toEqual(expectedDate);
    });

    test('should return the epoch if given an invalid date string', () => {
      expect(parseDate('')).toEqual(new Date('Invalid Date'));
      expect(parseDate('not a date')).toEqual(new Date('Invalid Date'));
      expect(parseDate('not')).toEqual(new Date('Invalid Date'));
    });
  });

  describe('parseDateTime', () => {
    test('should correctly parse date string with date and time', () => {
      const dateStr = '2022-12-01 13:30:00.000';
      const expectedDate = new Date(2022, 11, 1, 13, 30, 0, 0);
      expect(parseDateTime(dateStr)).toEqual(expectedDate);
    });

    test('should correctly parse date string with only time', () => {
      const dateStr = '13:30:00.000';
      const today = new Date();
      const expectedDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 13, 30, 0, 0);
      expect(parseDateTime(dateStr)).toEqual(expectedDate);
    });

    test('should return the input if already a Date', () => {
      const date = new Date();
      expect(parseDateTime(date)).toEqual(date);
    });

    test('should throw an error for invalid date string', () => {
      expect(parseDateTime('')).toEqual(new Date('Invalid Date'));
      expect(parseDateTime('not a date')).toEqual(new Date('Invalid Date'));
    });
  });

  describe('isDateTimeInRange', () => {
    const dateTimeRange = '9:30:00.000 - 12:00:00.000';

    test('should return true for date time within the range', () => {
      const dateStr = '2022-12-01 10:30:00.000';
      expect(isDateTimeInRange(dateTimeRange, dateStr)).toBeTruthy();
    });

    test('should return false for date time outside the range', () => {
      const dateStr = '2022-12-01 13:30:00.000';
      expect(isDateTimeInRange(dateTimeRange, dateStr)).toBeFalsy();
    });

    test('should throw an error for invalid date string or date', () => {
      const dateStr = '2022-12-01 13:30:00.000';
      expect(() => isDateTimeInRange('', dateStr)).toThrow(
        new Error('isDateTimeInRange: dateTimeRange is not a correct time range string'),
      );
      expect(() => isDateTimeInRange('9:30:00.000 - not:a:data', dateStr)).toThrow(
        new Error('isDateTimeInRange: Invalid date range format'),
      );
      expect(isDateTimeInRange(dateTimeRange, '')).toBeFalsy();
    });
  });

  describe('isDateInRange', () => {
    test('should return true if date is between start and end date', () => {
      expect(isDateInRange('2022-01-01', '2022-01-31', '2022-01-15')).toBeTruthy();
    });

    test('should return false if date is not between start and end date', () => {
      expect(isDateInRange('2022-01-01', '2022-01-31', '2022-02-15')).toBeFalsy();
    });

    test('should throw an error if start or end date is invalid', () => {
      expect(() => isDateInRange('2022-01-01', 'invalid date', '2022-01-15')).toThrowError('Invalid date range format');
    });
  });

  describe('compareDates', () => {
    test('should return true if date1 is greater than date2', () => {
      expect(compareDates('2022-01-01', '2022-01-31', 'greater')).toBeFalsy();
      expect(compareDates('2022-01-31', '2022-01-01', 'greater')).toBeTruthy();
    });

    test('should return true if date1 is greater than or equal to date2', () => {
      expect(compareDates('2022-01-01', '2022-01-31', 'greaterOrEqual')).toBeFalsy();
      expect(compareDates('2022-01-31', '2022-01-01', 'greaterOrEqual')).toBeTruthy();
      expect(compareDates('2022-01-01', '2022-01-01', 'greaterOrEqual')).toBeTruthy();
    });

    test('should return true if date1 is less than date2', () => {
      expect(compareDates('2022-01-01', '2022-01-31', 'less')).toBeTruthy();
      expect(compareDates('2022-01-31', '2022-01-01', 'less')).toBeFalsy();
    });

    test('should return true if date1 is less than or equal to date2', () => {
      expect(compareDates('2022-01-01', '2022-01-31', 'lessOrEqual')).toBeTruthy();
      expect(compareDates('2022-01-31', '2022-01-01', 'lessOrEqual')).toBeFalsy();
      expect(compareDates('2022-01-01', '2022-01-01', 'lessOrEqual')).toBeTruthy();
    });

    test('should throw an error if the comparison type is invalid', () => {
      expect(() => compareDates('2022-01-01', '2022-01-31', 'invalidType' as ComparisonType)).toThrowError(
        'Invalid comparison type: invalidType',
      );
    });
  });
});

import { beforeEach, describe, expect, it } from 'vitest';
import { addClass, hasClass, removeClass } from '../';

describe('Test suite for class manipulation functions', () => {
  let ele: HTMLElement;

  beforeEach(() => {
    ele = document.createElement('div');
    ele.className = 'foo bar';
  });

  describe('hasClass', () => {
    it('should return true if element has the class', () => {
      expect(hasClass(ele, 'foo')).toBe(true);
    });

    it('should return false if element does not have the class', () => {
      expect(hasClass(ele, 'baz')).toBe(false);
    });
  });

  describe('addClass', () => {
    it('should add the class if element does not have it', () => {
      addClass(ele, 'baz');
      expect(ele.className).toBe('foo bar baz');
    });

    it('should not add the class if element already has it', () => {
      addClass(ele, 'foo');
      expect(ele.className).toBe('foo bar');
    });
  });

  describe('removeClass', () => {
    it('should remove the class if element has it', () => {
      removeClass(ele, 'foo');
      expect(ele.className).toBe('bar');
    });

    it('should not remove the class if element does not have it', () => {
      removeClass(ele, 'baz');
      expect(ele.className).toBe('foo bar');
    });
  });
});

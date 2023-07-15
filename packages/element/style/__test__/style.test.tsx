import { beforeEach, describe, expect, it } from 'vitest';
import { getStyle, setStyle, removeStyle } from '..';

describe('Test suite for class manipulation functions', () => {
  let ele: HTMLElement;

  beforeEach(() => {
    ele = document.createElement('div');
    ele.className = 'foo bar';
  });

  describe('getStyle function', () => {
    it('should return an object with the inline styles of an element', () => {
      ele.style.setProperty('color', 'red');
      const styles = getStyle(ele);
      expect(styles).to.deep.equal({ color: 'red' });
    });
  });

  describe('setStyle function', () => {
    it('should set the inline styles of an element', () => {
      setStyle(ele, { color: 'red' });
      expect(ele.style.getPropertyValue('color')).to.equal('red');
    });
  });

  describe('removeStyle function', () => {
    it('should remove the inline styles of an element', () => {
      ele.style.setProperty('color', 'red');
      removeStyle(ele, ['color']);
      expect(ele.style.getPropertyValue('color')).to.equal('');
    });
  });
});

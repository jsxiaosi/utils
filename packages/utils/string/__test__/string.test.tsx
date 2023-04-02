import { describe, expect, it } from 'vitest';

import { stringTrim, transformString } from '..';

describe('stringTrim function', () => {
  it('should trim all spaces', () => {
    expect(stringTrim('   abc   def   ghi   ')).toBe('abcdefghi');
  });

  it('should trim left spaces', () => {
    expect(stringTrim('   abc   def   ghi   ', 'left')).toBe('abc   def   ghi   ');
  });

  it('should trim right spaces', () => {
    expect(stringTrim('   abc   def   ghi   ', 'right')).toBe('   abc   def   ghi');
  });
});

describe('transformString function', () => {
  it('should transform to lowerCamelCase', () => {
    expect(transformString('my-transform-string', 'lowerCamelCase')).toBe('myTransformString');
  });

  it('should transform to upperCamelCase', () => {
    expect(transformString('my-transform-string', 'upperCamelCase')).toBe('MyTransformString');
  });

  it('should transform to upperCase', () => {
    expect(transformString('my-transform-string', 'upperCase')).toBe('MY-TRANSFORM-STRING');
  });

  it('should no transform ', () => {
    expect(transformString('my-transform-string')).toBe('my-transform-string');
  });
});

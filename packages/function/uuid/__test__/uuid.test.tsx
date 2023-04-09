import { describe, expect, it } from 'vitest';

import validate from 'uuid-validate';
import { generateUUID } from '..';

describe('generateUUID', () => {
  it('should generate a valid UUID', () => {
    const uuid = generateUUID();
    expect(validate(uuid)).toBeTruthy();
  });

  it('should generate unique UUIDs', () => {
    const uuids = new Set();
    const numUUIDs = 1000;

    for (let i = 0; i < numUUIDs; i++) {
      const uuid = generateUUID();
      expect(uuids.has(uuid)).toBeFalsy();
      uuids.add(uuid);
    }
  });
});

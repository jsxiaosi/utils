import { describe, expect, it } from 'vitest';
import { objectToFormData, mergeFormData } from '..';

describe('objectToFormData', () => {
  it('should convert a simple object to FormData', () => {
    const obj = {
      name: 'John',
      age: 30,
    };
    const formData = objectToFormData(obj);
    expect(formData.get('name')).toBe('John');
    expect(formData.get('age')).toBe('30');
  });

  it('should convert a nested object to FormData', () => {
    const obj = {
      name: 'John',
      address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
      },
    };
    const formData = objectToFormData(obj);
    expect(formData.get('name')).toBe('John');
    expect(formData.get('address[street]')).toBe('123 Main St');
    expect(formData.get('address[city]')).toBe('Anytown');
    expect(formData.get('address[state]')).toBe('CA');
  });

  it('should convert an array to FormData', () => {
    const obj = {
      name: 'John',
      hobbies: ['Reading', 'Swimming', 'Hiking'],
    };
    const formData = objectToFormData(obj);
    expect(formData.get('name')).toBe('John');
    expect(formData.get('hobbies[0]')).toBe('Reading');
    expect(formData.get('hobbies[1]')).toBe('Swimming');
    expect(formData.get('hobbies[2]')).toBe('Hiking');
  });

  it('should convert a nested array to FormData', () => {
    const obj = {
      name: 'John',
      hobbies: [
        'Reading',
        {
          type: 'Swimming',
          location: 'Beach',
        },
        ['Hiking', 'Camping'],
      ],
    };
    const formData = objectToFormData(obj);
    expect(formData.get('name')).toBe('John');
    expect(formData.get('hobbies[0]')).toBe('Reading');
    expect(formData.get('hobbies[1][type]')).toBe('Swimming');
    expect(formData.get('hobbies[1][location]')).toBe('Beach');
    expect(formData.get('hobbies[2][0]')).toBe('Hiking');
    expect(formData.get('hobbies[2][1]')).toBe('Camping');
  });
});

describe('mergeFormData', () => {
  it('should merge two FormData objects', () => {
    const formData1 = new FormData();
    formData1.append('name', 'John');
    formData1.append('age', '30');

    const formData2 = new FormData();
    formData2.append('hobbies', 'Reading');
    formData2.append('hobbies', 'Swimming');

    const mergedFormData = mergeFormData(formData1, formData2);
    expect(mergedFormData.get('name')).toBe('John');
    expect(mergedFormData.get('age')).toBe('30');
    expect(mergedFormData.get('hobbies')).toBe('Reading');
    expect(mergedFormData.getAll('hobbies')).toEqual(['Reading', 'Swimming']);
  });
});

import { describe, it, expect } from '@jest/globals';
import main from '../src/task_1.js';

describe('Array.prototype.duplicate', () => {
  it('should duplicate an array with unique elements', () => {
    const input = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
    expect(input.duplicate()).toEqual(expected);
  });

  it('should duplicate an array with duplicate elements', () => {
    const input = [1, 1, 2, 2, 3, 3];
    const expected = [1, 1, 2, 2, 3, 3, 1, 1, 2, 2, 3, 3];
    expect(input.duplicate()).toEqual(expected);
  });

  it('should duplicate an empty array', () => {
    const input = [];
    const expected = [];
    expect(input.duplicate()).toEqual(expected);
  });

  it('should duplicate an array with one element', () => {
    const input = [42];
    const expected = [42, 42];
    expect(input.duplicate()).toEqual(expected);
  });

  it('should duplicate an array of strings', () => {
    const input = ['hello', 'world'];
    const expected = ['hello', 'world', 'hello', 'world'];
    expect(input.duplicate()).toEqual(expected);
  });

  it('should duplicate an array of objects', () => {
    const input = [{ name: 'John' }, { name: 'Jane' }];
    const expected = [{ name: 'John' }, { name: 'Jane' }, { name: 'John' }, { name: 'Jane' }];
    expect(input.duplicate()).toEqual(expected);
  });
});

describe('main', () => {
  it('should duplicate a simple numeric array', () => {
    const result = main([1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
  });

  it('should use the default input and return the duplicated array', () => {
    const expected = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
    expect(main()).toEqual(expected);
  });
});

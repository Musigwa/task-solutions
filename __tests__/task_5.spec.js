import { describe, it, expect } from '@jest/globals';

import main from '../src/task_5';

describe('main', () => {
  it('should return the median value of unitary array', () => {
    const dataSet = [1];

    const result = main(dataSet);

    expect(result).toEqual([1]);
  });

  it('should return the median value of array of length 2', () => {
    const dataSet = [1, 2, 3];

    const result = main(dataSet);

    expect(result).toEqual([1, 1.5, 2]);
  });

  it('should calculate the median for each element in the input array', () => {
    // Input: [1, 2, 3]
    // Median values: [1, 1.5, 2]
    const input1 = [1, 2, 3];
    const expected1 = [1, 1.5, 2];
    expect(main(input1)).toEqual(expected1);

    // Input: [4, 2, 5, 1, 3]
    // Median values: [4, 3, 4, 3, 3]
    const input2 = [4, 2, 5, 1, 3];
    const expected2 = [4, 3, 4, 3, 3];
    expect(main(input2)).toEqual(expected2);

    // Input: [10, 20, 30, 40, 50]
    // Median values: [10, 15, 20, 25, 30]
    const input3 = [10, 20, 30, 40, 50];
    const expected3 = [10, 15, 20, 25, 30];
    expect(main(input3)).toEqual(expected3);
  });

  it('should handle an empty input array and return an empty result', () => {
    const input = [];
    const expected = [];
    expect(main(input)).toEqual(expected);
  });

  it('should handle an input array with a single element and return that element as the median', () => {
    const input = [5];
    const expected = [5];
    expect(main(input)).toEqual(expected);
  });

  it('should handle an input array with duplicate elements and return the median accordingly', () => {
    // Input: [1, 2, 2, 3, 4, 5]
    // Median values: [1, 1.5, 2, 2, 2, 2.5]
    const input = [1, 2, 2, 3, 4, 5];
    const expected = [1, 1.5, 2, 2, 2, 2.5];
    expect(main(input)).toEqual(expected);
  });  
});

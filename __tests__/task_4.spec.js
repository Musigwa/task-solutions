import { describe, it, expect } from '@jest/globals';
import main from '../src/task_4';

describe('main', () => {
  it('should return the mapped values for each targetDate', () => {
    const dataSet = [
      { value: 10, targetDate: '2020-01-01' },
      { value: 14, targetDate: '2020-01-03' },
      { value: 12, targetDate: '2020-01-02' },
      { value: 10, targetDate: '2019-01-02' },
    ];

    const result = main(dataSet);

    expect(result['2019-01-02'].value).toEqual(10);
    expect(result['2020-01-01'].value).toEqual(10);
    expect(result['2020-01-02'].value).toEqual(12);
    expect(result['2020-01-03'].value).toEqual(14);
  });

  it('should convert an array with a single element into a dictionary', () => {
    const input = [{ targetDate: '2023-05-17', value: 100 }];
    const expected = { '2023-05-17': { value: 100 } };
    expect(main(input)).toEqual(expected);
  });

  it('should convert an array with multiple elements into a dictionary', () => {
    const input = [
      { targetDate: '2023-05-17', value: 100 },
      { targetDate: '2023-05-18', value: 200 },
      { targetDate: '2023-05-19', value: 300 },
    ];
    const expected = {
      '2023-05-17': { value: 100 },
      '2023-05-18': { value: 200 },
      '2023-05-19': { value: 300 },
    };
    expect(main(input)).toEqual(expected);
  });

  it('should handle an empty array and return an empty dictionary', () => {
    const input = [];
    const expected = {};
    expect(main(input)).toEqual(expected);
  });
});

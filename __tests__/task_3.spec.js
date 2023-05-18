import { describe, it, expect } from '@jest/globals';
import main from '../src/task_3';

function decimalsToFixed(value, decimals) {
  return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

describe('main', () => {
  it('should return correct conversion info for 90 degrees', () => {
    const result = main(90);

    const newAngle = decimalsToFixed(result.newAngle, 2);
    const addedRadian = decimalsToFixed(result.baseRadian, 4);

    expect(newAngle).toEqual(100.0);
    expect(addedRadian).toEqual(1.5708);
  });

  it('should convert degrees to radians and add 10 degrees in radians', () => {
    const result = main(45);

    const newAngle = decimalsToFixed(result.newAngle, 2);
    const addedRadian = decimalsToFixed(result.baseRadian, 4);
    expect(newAngle).toEqual(55.0);
    expect(addedRadian).toEqual(0.7854);
  });

  it.skip('should convert degrees to radians and add 10 degrees in radians for negative input', () => {
    const input = -30; // -30 degrees
    const expected = { newAngle: -19.202572368477403, baseRadian: -0.5235987755982988 };
    expect(main(input)).toEqual(expected);
  });

  it('should convert degrees to radians and add 10 degrees in radians for 0 degrees input', () => {
    const result = main(0);

    const newAngle = decimalsToFixed(result.newAngle, 2);
    const addedRadian = decimalsToFixed(result.baseRadian, 4);
    expect(newAngle).toEqual(10);
    expect(addedRadian).toEqual(0);
  });

  it('should convert degrees to radians and add 10 degrees in radians for 360 degrees input', () => {
    const result = main(360);

    const newAngle = decimalsToFixed(result.newAngle, 2);
    const addedRadian = decimalsToFixed(result.baseRadian, 4);
    expect(newAngle).toEqual(370);
    expect(addedRadian).toEqual(6.2832);
  });
});

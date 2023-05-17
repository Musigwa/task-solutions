import { describe, it, expect, jest } from '@jest/globals';
import main, { logCar } from '../src/task_2';

describe('main', () => {
  const cars = [
    { color: 'Red', brand: 'Mercedes' },
    { color: 'White', brand: 'Toyota' },
    { color: 'Gray', brand: 'Audi' },
  ];

  it('should log the Mercedes details', () => {
    const spyLog = jest.spyOn(console, 'log').mockImplementation(() => {
      /* Silence */
    });
    main(cars[0]);
    expect(spyLog).toHaveBeenCalledWith('Red Mercedes');
  });

  it('should log all cars details', () => {
    const spyLog = jest.spyOn(console, 'log').mockImplementation(() => {
      /* Silence */
    });
    main(cars);
    expect(spyLog).toHaveBeenCalledWith('Red Mercedes');
    expect(spyLog).toHaveBeenCalledWith('White Toyota');
    expect(spyLog).toHaveBeenCalledWith('Gray Audi');
  });

  it('should log details of a single car object', () => {
    const car = { color: 'red', brand: 'Tesla' };
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    main(car);
    expect(consoleSpy).toHaveBeenCalledWith('red Tesla');
    consoleSpy.mockRestore();
  });

  it('should log details of multiple car objects in an array', () => {
    const cars = [
      { color: 'blue', brand: 'BMW' },
      { color: 'black', brand: 'Audi' },
      { color: 'white', brand: 'Mercedes' },
    ];
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    main(cars);
    expect(consoleSpy).toHaveBeenCalledTimes(3);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, 'blue BMW');
    expect(consoleSpy).toHaveBeenNthCalledWith(2, 'black Audi');
    expect(consoleSpy).toHaveBeenNthCalledWith(3, 'white Mercedes');
    consoleSpy.mockRestore();
  });

  it('should not log anything if the input is an empty array', () => {
    const cars = [];
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    main(cars);
    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it('should bind the logCar function correctly when using bind directly', () => {
    const car = { color: 'green', brand: 'Toyota' };
    const logCarBound = logCar.bind(car);
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    logCarBound();
    expect(consoleSpy).toHaveBeenCalledWith('green Toyota');
    consoleSpy.mockRestore();
  });

  it('should bind the logCar function correctly when using bind within main', () => {
    const car = { color: 'yellow', brand: 'Ford' };
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    main(car);
    expect(consoleSpy).toHaveBeenCalledWith('yellow Ford');
    consoleSpy.mockRestore();
  });
});

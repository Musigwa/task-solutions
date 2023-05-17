import {describe, it, expect, jest} from '@jest/globals';

import Task_2 from '../src/task_2.js'

describe.skip('Task 2', () => {
    const cars = [
        {color: "Red", brand: "Mercedes"},
        {color: "White", brand: "Toyota"},
        {color: "Gray", brand: "Audi"}
    ]

    it('should log the Mercedes details', () => {
        const spyLog = jest.spyOn(console, 'log').mockImplementation(() => { /* Silence */ })
        Task_2(cars[0])
        expect(spyLog).toHaveBeenCalledWith('Red Mercedes')
    })

    it('should log all cars details', () => {
        const spyLog = jest.spyOn(console, 'log').mockImplementation(() => { /* Silence */ })
        Task_2(cars)
        expect(spyLog).toHaveBeenCalledWith('Red Mercedes')
        expect(spyLog).toHaveBeenCalledWith('White Toyota')
        expect(spyLog).toHaveBeenCalledWith('Gray Audi')
    })
})
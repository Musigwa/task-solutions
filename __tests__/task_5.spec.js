import {describe, it, expect} from '@jest/globals';

import Task_5 from '../src/task_5.js'

describe.skip('Task 5', () => {
    it('should return the median value of unitary array', () => {
        const dataSet = [1]

        const result = Task_5(dataSet)

        expect(result).toEqual([1])
    })

    it('should return the median value of array of length 2', () => {
        const dataSet = [1, 2, 3]

        const result = Task_5(dataSet)

        expect(result).toEqual([1, 1.5, 2])
    })
})
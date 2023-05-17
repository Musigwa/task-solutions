import {describe, it, expect} from '@jest/globals';

import Task_3 from '../src/task_3.js'

function decimalsToFixed(value, decimals){
    return Math.round(value * Math.pow(10,decimals)) / Math.pow(10,decimals)
}

describe('Task 3', () => {
    it('should return correct conversion info for 90 degrees', () => {
        const result = Task_3(90)

        const newAngle = decimalsToFixed(result.newAngle, 2)
        const addedRadian = decimalsToFixed(result.baseRadian, 4)

        expect(newAngle).toEqual(100.00)
        expect(addedRadian).toEqual(1.5708)
    })
})
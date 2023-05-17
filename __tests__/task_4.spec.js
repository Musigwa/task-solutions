import {describe, it, expect} from '@jest/globals';

import Task_4 from '../src/task_4.js'

function decimalsToFixed(value, decimals){
    return Math.round(value * Math.pow(10,decimals)) / Math.pow(10,decimals)
}

describe('Task 4', () => {
    it('should return the mapped values for each targetDate', () => {
        const dataSet = [
            {value: 10, targetDate: "2020-01-01"},
            {value: 14, targetDate: "2020-01-03"},
            {value: 12, targetDate: "2020-01-02"},
            {value: 10, targetDate: "2019-01-02"}
        ]

        const result = Task_4(dataSet)

        expect(result['2019-01-02'].value).toEqual(10)
        expect(result['2020-01-01'].value).toEqual(10)
        expect(result['2020-01-02'].value).toEqual(12)
        expect(result['2020-01-03'].value).toEqual(14)
    })
})
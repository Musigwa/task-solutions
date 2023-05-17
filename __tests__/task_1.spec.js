import {describe, it, expect} from '@jest/globals';

import Task_1 from '../src/task_1.js'

describe('Task 1', () => {
    it('should duplicate a simple numeric array', () => {
        const result = Task_1([1,2,3,4,5])
        expect(result).toEqual([1,2,3,4,5,1,2,3,4,5])
    })
})
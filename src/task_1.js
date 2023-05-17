/**
 * TASK 1:
 *
 * Write a function `duplicate` which duplicates an entire array instance,
 * and that it must respect the implementation exemplified in the code below
 *
 * ```javascript
 * [1,2,3,4,5].duplicate(); // output: [1,2,3,4,5,1,2,3,4,5]
 * ```
 *
 * Notes:
 * - The `main` function MUST return the task's result;
 * - The input for the `main` function is ALWAYS an Array. The default one is [1,2,3,4,5];
 * - Feel free to extend the test cases available in src/__tests__/task_1.spec.js
 */

/**
 * The main function
 * @param input {Array<*>}
 * @return {Array<*>}
 */

Array.prototype.duplicate = function () {
    return [...this, ...this];
};

export default function main(input) {
    return input.duplicate();
}

/**
 * TASK 4:
 *
 * Let's assume a dictionary as an object that holds key-value pairs.
 * Dictionaries (or Maps) are very useful to index data for easy access.
 * In this task, you have to index the income data per its `targetDate` property.
 *
 * Your task is to convert the input array, and them return a dictionary, where
 * each element is index per its `targetDate`.
 *
 * NOTES:
 * - The input of the `main` function is ALWAYS an Array of objects that contain the property `targetDate`;
 * - It is granted that the value of the `targetDate` of each element is unique;
 * - The `main` function MUST return a result;
 * - Feel free to extend the test cases available in src/__tests__/task_4.spec.js
 */

/**
 *
 * @param input {Array<{targetDate: string}>}
 * @return {Record<string: object>}
 */
export default function main(input) {
  return input.reduce((dictionary, element) => {
    const { targetDate, ...rest } = element;
    dictionary[targetDate] = rest;
    return dictionary;
  }, {});
}


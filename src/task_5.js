/**
 * TASK 5:
 *
 * Find the median value of the data set.
 * The median tells you where the middle of a data set is. It’s used for many real-life situations,
 * like Bankruptcy law (in USA), where you can only claim bankruptcy if you are below the median
 * income in your state.
 *
 * The median formula is {(n + 1) ÷ 2}th, where “n” is the number of items in the set and “th” just means the (n)th number.
 *
 * Procedure:
 * To find the median, first order the numbers from smallest to largest. Then find the middle number.
 *
 * Example
 * In the array [1, 2, 3, 5, 6, 7, 9], the median number is 5, because 5 is allocated in the index 3 of the array, having
 * three indexes before and three after it.
 *
 * You get the same result with the formula.
 * There are 7 numbers in the set, so n = 7:
 * {(7 + 1) ÷ 2}th
 * = {(8) ÷ 2}th
 * = {4}th
 * The 4th number in the array [1, 2, 3, 5, 6, 7, 9] is 5.
 *
 * A caution with using the median formula: The steps differ slightly depending on whether you have an
 * even amount of numbers in your data set.
 * For data sets with even amount of elements, the median is the average of the two middle numbers in the set.
 *
 * For the coding task
 * The `main` function will receive the `input` data, and it will have to return the result.
 * The `input` parameter consists of an Array of N integers. Your task is to insert these numbers into a new empty array
 * one by one and after each insertion, calculate the median of all the integers read so far, starting from the first
 * integer till the last.
 *
 * Input format: [A1, A2, ... , AN]
 *
 * Output format: [Median1, Median2, ... , MedianN]
 *
 * For each element added to the stream print the new median in a new line.
 *
 * Example:
 * Input: [1, 2, 3]
 *
 * Output:[1, 1.5, 2]
 *
 * Explanation:
 * 1st element is 1, so Median remains 1
 * 2nd element is 2, so Median = (1+2)/2 = 1.5
 * 3rd element is 3, so Median = [1,2,3] = 2
 *
 * NOTES:
 * - The input of `main` function will ALWAYS be an Array of integers;
 * - The `main` function MUST return a result;
 * - - Feel free to extend the test cases available in src/__tests__/task_5.spec.js
 */

/**
 * Return an accumulated array of median values
 * @param input {Array<number>}
 * @return {Array<number>}
 */
export default function main(input) {
  let result = [];
  let sortedArr = [];

  for (let i = 0; i < input.length; i++) {
    sortedArr.push(input[i]);
    sortedArr.sort((a, b) => a - b);

    const length = sortedArr.length;
    const median =
      length % 2 === 0
        ? (sortedArr[length / 2 - 1] + sortedArr[length / 2]) / 2
        : sortedArr[Math.floor(length / 2)];

    result.push(median);
  }

  return result;
}

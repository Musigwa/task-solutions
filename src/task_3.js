/**
 * TASK 3:
 *
 * The application has an object that performs two conversions: degrees-to-radians (deg2Rad) and radians-to-degrees (rad2deg).
 * One of the operations is not working. What is going wrong? Can you fix it?
 *
 * NOTES:
 * - The `main` function MUST return the results;
 * - The input for the `main` function is always a number;
 * - DO NOT change the code of the `main` and `addRadianToDegrees` functions;
 * - Report the bug in the "REPORT BUG" section;
 * - Feel free to extend the test cases available in src/__tests__/task_3.spec.js
 */

const Converter = {
  radian: 180 / Math.PI,
  deg2rad(degrees) {
    return degrees / this.radian;
  },
  rad2deg(radians) {
    return radians * this.radian;
  },
};

/**
 * Adds a radian value to a degree input.
 *
 * @param degree {number}
 * @param radian {number}
 * @return {{baseRadian: number, newAngle: number}} Object with operation details
 */
function addRadianToDegrees(degree, radian){
  const convertedRadian = Converter.deg2rad(degree);
  const degPlus10 = Converter.rad2deg(convertedRadian + radian);
  return { newAngle: degPlus10, baseRadian: convertedRadian}
}

export default function main(input) {
  const TEN_DEGREES_IN_RADIANS = 0.174533
  return addRadianToDegrees(input, TEN_DEGREES_IN_RADIANS)
}

/* BUG REPORT: What is going wrong?

 * The problem in the given code lies in the `rad2deg` function of the `Converter` object. 
 * The `rad2deg` function is currently defined as an arrow function (`=>`), which affects the binding of `this`. 
 * Arrow functions do not have their own `this` context and instead inherit it from the surrounding scope.
 * In this case, when `rad2deg` is called, the `this` context is not bound correctly to the `Converter` object. 

 * As a result, `this.radian` in the arrow function returns `undefined`, leading to incorrect calculations.
 * To fix this issue, we need to change the arrow function to a regular function to ensure that `this` refers to the `Converter` object and the `radian` value is retrieved correctly. We can modify the code as follows:
 * 
 * ```javascript
 * const Converter = {
 *   radian: 180 / Math.PI,
 *   deg2rad(degrees) {
 *     return degrees / this.radian;
 *   },
 *   rad2deg(radians) {
 *     return radians * this.radian;
 *   },
 * };
 * ```
 * 
 * By changing the arrow function to a regular function in the `rad2deg` method, the code will correctly perform the conversion from radians to degrees.
 * Please note that arrow functions do not have a `this` binding, so they are not suitable for methods that rely on the object's context or properties accessed via `this`. 
 * Regular functions, on the other hand, have their `this` binding determined by how they are called and are suitable for object methods.
 * */


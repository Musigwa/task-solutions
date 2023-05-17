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
  rad2deg: (radians) => {
    // Fix: change arrow function to regular function
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
 * Report below why we have a problem.
 *
 * */

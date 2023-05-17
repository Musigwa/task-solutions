/**
 * TASK 2:
 *
 * Modify the existing code to print the details of `secondCar` using the `bind` method
 * from the Function class, use the `logCar` function to log the cars properties.
 *
 * Notes:
 * - Do not remove the `export` of the `logCar` function;
 * - The `main` function does not return a result;
 * - The input of the `main` function can be one "car" object, or an Array of "cars";
 * - The "car" object will ALWAYS have the property `color` and `brand` as strings.
 * - Feel free to extend the test cases available in src/__tests__/task_2.spec.js
 */

export function logCar() {
  console.log(this.color + " " + this.brand);
}

/**
 * The main function
 * @param input {Car | Array<Car>}
 */
export default function main(input) {
  // Implement your logic
  if (Array.isArray(input)) {
    // If the input is an array of cars
    input.forEach((car) => {
      const logCarBound = logCar.bind(car);
      logCarBound();
    });
  } else {
    // If the input is a single car object
    const logCarBound = logCar.bind(input);
    logCarBound();
  }
}

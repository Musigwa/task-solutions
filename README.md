# Task Solutions

This repository contains the solutions for a set of programming tasks. Each task focuses on a specific problem or concept.

## Table of Contents

- [Task Solutions](#task-solutions)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Running Tests](#running-tests)
  - [Task\_1: Array Duplication](#task_1-array-duplication)
    - [Example](#example)
  - [Task\_2: Object Method Binding](#task_2-object-method-binding)
  - [Task\_3: Degrees and Radians Conversion](#task_3-degrees-and-radians-conversion)
  - [Task\_4: Dictionary Indexing](#task_4-dictionary-indexing)
  - [Task\_5: Median Calculation](#task_5-median-calculation)
    - [Example](#example-1)
  - [Extending or Modifying the Project](#extending-or-modifying-the-project)
  - [About the author](#about-the-author)
  - [License](#license)

## Introduction

This repository contains solutions for a set of programming tasks. Each task is located in a separate file under the `src` directory, and there are corresponding test files in the `src/__tests__` directory to validate the implementations.

## Requirements

To run the task solutions, you need to have the following node environment installed on your system:

- Node v14.17 or greater
- NPM v6.14.17 or greater

Please checkout the official documentation of [node.js' download section](http://nodejs.org) for more information and make sure to install the correct version of the node package that meets the requirements and your machine OS

## Installation

To get started with the task solutions, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Musigwa/task-solutions.git
   ```

2. Change to the project directory:
   ```bash
   cd task-solutions
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Running Tests

To run the tests for the task solutions, use the following command:
Run automated tests:
```bash
npm test
```
This will execute the test suite and display the results for each task.

## Task_1: Array Duplication

The goal of this task is to implement a function that duplicates an entire array instance.

- The function `duplicate()` is added as a prototype property to the `Array` object.
- The function duplicates the array and returns the duplicated array.

### Example

```javascript
[1, 2, 3, 4, 5].duplicate(); // Output: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
```

## Task_2: Object Method Binding

The objective of this task is to modify existing code to use the bind method from the Function class.

The function logCar() is exported and prints the properties color and brand of the car object.
The main function accepts a car object or an array of car objects.
The main function should use the bind method to call logCar and print the details of the car object(s).

## Task_3: Degrees and Radians Conversion

This task involves fixing an error in the implementation of a conversion between degrees and radians.

The object Converter contains methods for converting degrees to radians (deg2rad) and radians to degrees (rad2deg).
There was a bug in the rad2deg method that we fixed and the bug report can be found in the target task's file `src/task_3.js`.
The main function takes a number as input and returns the result of adding a specific radian value to the degrees input.

## Task_4: Dictionary Indexing

The objective of this task is to index income data based on the targetDate property.

The main function accepts an array of objects, each containing the targetDate property.
The function should return a dictionary where each element is indexed based on its targetDate property.

## Task_5: Median Calculation

In this task, the goal is to calculate the median value of a dataset.

The main function takes an input array of integers.
After each element is added to the array, the function calculates the median of all the integers read so far.
The function should return an array of accumulated median values.

### Example

```javascript
Input: [1, 2, 3]
Output: [1, 1.5, 2]
```

## Extending or Modifying the Project

If you want to extend or modify the project, you can follow these steps:

1. Add a new task file in the src directory, e.g., task_6.js, with the task implementation.
2. Write test cases for the new task in the src/__tests__ directory, e.g., task_6.spec.js.
3. Export the main function from the new task file and import it in the index.js file to make it accessible.
4. Run the tests to ensure the correctness of the new task:
   ```bash
   npm test
   ```
5. You can now use the new task by importing and invoking the main function in your code.
Feel free to explore and modify the existing code and test files to suit your needs.

## About the author

Name: MUSIGWA Pacifique

You can contact me by: 
1. Email: pacifique.musigwa@gmail.com
2. Twitter: https://twitter.com/MusigwaP
3. LinkedIn: https://linkedin.com/in/musigwa-pacifique

## License

This project is licensed under the [MIT license](https://opensource.org/licenses/MIT).
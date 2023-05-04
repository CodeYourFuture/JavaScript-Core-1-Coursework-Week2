/*
    In maths, the factorial of an integer (written as n!) is the product of an integer, and all the integers below it (not including zero).
    See: https://en.wikipedia.org/wiki/Factorial
    For example,
        3! is 6 (because 3 * 2 * 1 = 6)
        5! is 120 (because 5 * 4 * 3 * 2 * 1 = 120)
    
    Using a loop, complete the function below so it returns the factorial of the number being passed in. 
*/

function factorial(input) {
  // TODO
}

function factorial(input) {
  let result = 1;
  for (let i = 2; i <= input; i++) {
    result *= i;
  }
  return result;
}

input 3! is 6 because 3 * 2 * 1 = 6

// In this function, we first initialize the result variable to 1, since any number multiplied by 1 is itself. 
// Then, we use a for loop to iterate from 2 up to the input number (inclusive), and for each iteration, we multiply the current value of result by the current value of i. 
// Finally, we return the value of result after the loop has finished, which will be the factorial of the input number.

function factorial(input) {
  let result = 1;
  for (let i = 2; i<= input; i++) {
    result *= 1;
  } return result;
}

input 5! is 120 because 5 * 4 * 3 * 2 * 1 = print reslult 120

//  In this function, we first initialize the result variable to 1, since any number multiplied by 1 is itself. 
// Then, we use a for loop to iterate from 2 up to the input number (inclusive), and for each iteration, we multiply the current value of result by the current value of i. 
// Finally, we return the value of result after the loop has finished, which will be the factorial of the input number.

function factorial(input) {
  let result = 1;
  for (let i = 2; i <= input; i++) {
    result *= i;
  }
  return result;
}

input 4! is 36 because 4 * 3 * 2 * 1 = print result 36

//  In this function, we first initialize the result variable to 1, since any number multiplied by 1 is itself. 
// Then, we use a for loop to iterate from 2 up to the input number (inclusive), and for each iteration, we multiply the current value of result by the current value of i. 
// Finally, we return the value of result after the loop has finished, which will be the factorial of the input number.

function factorial(input) {
  let result = 1;
  for (let i = 2; i <= input; i++) {
    result *= i;
  } 
  return result;
}

input 1! is 1 because 1 * 1 = print result 1

//  In this function, we first initialize the result variable to 1, since any number multiplied by 1 is itself. 
// Then, we use a for loop to iterate from 2 up to the input number (inclusive), and for each iteration, we multiply the current value of result by the current value of i. 
// Finally, we return the value of result after the loop has finished, which will be the factorial of the input number.

function factorial(input) {
  let result = 1;
  for (let i = 2; i <= input; i++) {
    result *= i;
  }
  return result;
}

input 2! is 2 because 2 * 1 = print result 2

//  In this function, we first initialize the result variable to 1, since any number multiplied by 1 is itself. 
// Then, we use a for loop to iterate from 2 up to the input number (inclusive), and for each iteration, we multiply the current value of result by the current value of i. 
// Finally, we return the value of result after the loop has finished, which will be the factorial of the input number.

/* ======= TESTS - DO NOT MODIFY ===== */

describe("factorial", () => {
  test("3! should be 6", () => {
    expect(factorial(3)).toEqual(6);
  });

  test("5! should be 120", () => {
    expect(factorial(5)).toEqual(120);
  });

  test("10! should be 3628800", () => {
    expect(factorial(10)).toEqual(3628800);
  });
});

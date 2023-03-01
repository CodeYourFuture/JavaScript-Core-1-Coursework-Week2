/*
    In maths, the factorial of an integer (written as n!) is the product of an integer, and all the integers below it (not including zero).
    See: https://en.wikipedia.org/wiki/Factorial
    For example,
        3! is 6 (because 3 * 2 * 1 = 6)
        5! is 120 (because 5 * 4 * 3 * 2 * 1 = 120)
    
    Using a loop, complete the function below so it returns the factorial of the number being passed in. 
*/

function factorial(input) {
  let result = input;
  // 0 and 1 are special cases are 0! and 1! equates to 1 but would equal 0 using the function.
  if (input === 0 || input === 1) {
    return 1;
  }
  // while loop, if input is greater than 1; input = (input-1), the variable "result" needs to retain the value from previous loop/iteration and multiply by the current input value so the calculation for result will equate to result * input. As "result" is called within itself, the value currently stored for "result" will be used will be from the calculation from previous iteration and new value will be reassigned to "result" as the calculation result * input will be performed again and repeated for each time the function loops until input is no longer greater 1.
  while (input > 1) {
    input--;
    result = result * input;
  }
  return result;
  // TODO
}

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

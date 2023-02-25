/*
    In maths, the factorial of an integer (written as n!) is the product of an integer, and all the integers below it (not including zero).
    See: https://en.wikipedia.org/wiki/Factorial
    For example,
        3! is 6 (because 3 * 2 * 1 = 6)
        5! is 120 (because 5 * 4 * 3 * 2 * 1 = 120)

    Using a loop, complete the function below so it returns the factorial of the number being passed in.
*/

//  Using a loop
function factorial1(input) {
  let output = 1;
  while (input > 0) {
    output *= input;
    input--;
  }
  return output;
}

// Using a factorial formula and recursion

function factorial2(input) {
  if (input === 0) {
    return 1;
  } else {
    return input * factorial2(input - 1);
  }
}

/* ======= TESTS - DO NOT MODIFY ===== */

describe('factorial', () => {
  test('3! should be 6', () => {
    expect(factorial1(3)).toEqual(6);
  });

  test('5! should be 120', () => {
    expect(factorial1(5)).toEqual(120);
  });

  test('10! should be 3628800', () => {
    expect(factorial1(10)).toEqual(3628800);
  });
});

/* ======= COPIED TESTS FOR SECOND FUNCTION ===== */
describe('factorial', () => {
  test('3! should be 6', () => {
    expect(factorial2(3)).toEqual(6);
  });

  test('5! should be 120', () => {
    expect(factorial2(5)).toEqual(120);
  });

  test('10! should be 3628800', () => {
    expect(factorial2(10)).toEqual(3628800);
  });
});

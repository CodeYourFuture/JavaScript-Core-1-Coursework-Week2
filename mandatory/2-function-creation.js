/*
  Complete the function to return a boolean describing whether a user is acceptable. 
  To be acceptable, two conditions must be fulfilled
    1. the user should be 18 or older
    2. the user must be logged in
*/
function isAcceptableUser(userAge, isLoggedIn) {}

/*
  Complete the function to apply discount percent based on how much is totalPrice in user cart.
    - When the total price is greater than 200, a 10% discount should be applied
    - When the total price is less than 200, a 5% discount should be applied

  The function should return the new price to be paid (e.g. if the totalPrice is 150, a 5% discount
    is applieds and 142.5 should be returned)
*/

function applyDiscount(totalPrice) {}

/*
  Complete the function to print to the console the odd numbers between 1 and limit (use a while loop):
  */
function printOddNumbers(limit) {}

/*
  Complete the buyTwoGetTheCheapestFree function: if user buys two items, the cheapest item will be free!
  The function should return the price to be paid once the discount is applied.
*/
function buyTwoGetTheCheapestFree(price1, price2) {}

/*
  Complete the function to determine if it is suitable for a person to register based on their age!
  - if the person is 12 or younger it should return "You Are Too Young To Register"
  - if the person is older than 12 and younger than 90 it should return "You Can Register"
  - if the person is 90 or older it should return "You Don't Need To Register"
*/
function canRegister(age) {}

/*
  Complete the function so that it prints out to the console numbers in reverse order starting at
  number and going down to 1 (e.g. if number was 3, it would print:
    3
    2
    1
  )
*/

function countReverse(number) {}

/* ======= TESTS - DO NOT MODIFY ===== */

test("isAcceptableUser function returns true if over 18 and logged in", () => {
  expect(isAcceptableUser(21, true)).toEqual(true);
});

test("isAcceptableUser function returns true if 18 and logged in", () => {
  expect(isAcceptableUser(18, true)).toEqual(true);
});

test("isAcceptableUser function returns false if under 18 and logged in", () => {
  expect(isAcceptableUser(17, true)).toEqual(false);
});

test("isAcceptableUser function returns false if over 18 and not logged in", () => {
  expect(isAcceptableUser(21, false)).toEqual(false);
});

test("applyDiscount function returns price with 5% discount", () => {
  expect(applyDiscount(120)).toEqual(114);
});

test("applyDiscount function returns price with 10% discount", () => {
  expect(applyDiscount(280)).toEqual(252);
});

test("printOddNumbers function prints odd numbers between 1 and 2", () => {
  expectprintOddNumbersToLog([1], 2);
});

test("printOddNumbers function prints odd numbers between 1 and 10", () => {
  expectprintOddNumbersToLog([1, 3, 5, 7, 9], 10);
});

function expectprintOddNumbersToLog(expectedValues, limit) {
  const consoleLogSpy = jest.spyOn(console, "log");
  printOddNumbers(limit);
  expect(consoleLogSpy).toBeCalledTimes(expectedValues.length);
  expectedValues.forEach((value, i) => {
    expect(consoleLogSpy).nthCalledWith(i + 1, value);
  });
  consoleLogSpy.mockRestore();
}

test("buyTwoGetTheCheapestFree function returns first price when it is largest", () => {
  expect(buyTwoGetTheCheapestFree(700, 500)).toEqual(700);
});

test("buyTwoGetTheCheapestFree function returns second price when it is largest", () => {
  expect(buyTwoGetTheCheapestFree(500, 700)).toEqual(700);
});

test("(canRegister function returns in case of a person of age 7", () => {
  expect(canRegister(7)).toEqual("You Are Too Young To Register");
});

test("canRegister function returns in case of a person of age 12", () => {
  expect(canRegister(12)).toEqual("You Are Too Young To Register");
});

test("canRegister function returns in case of a person of age 13", () => {
  expect(canRegister(13)).toEqual("You Can Register");
});

test("canRegister function returns in case of a person of age 89", () => {
  expect(canRegister(89)).toEqual("You Can Register");
});

test("canRegister function returns in case of a person of age 90", () => {
  expect(canRegister(90)).toEqual("You Don't Need To Register");
});

test("canRegister function returns in case of a person of age 112", () => {
  expect(canRegister(112)).toEqual("You Don't Need To Register");
});

test("countReverse function logs values from 7 to 1", () => {
  expectcountReverseToLog([7, 6, 5, 4, 3, 2, 1], 7);
});

function expectcountReverseToLog(expectedValues, start) {
  const consoleLogSpy = jest.spyOn(console, "log");
  countReverse(start);
  expect(consoleLogSpy).toBeCalledTimes(expectedValues.length);
  expectedValues.forEach((value, i) => {
    expect(consoleLogSpy).nthCalledWith(i + 1, value);
  });
  consoleLogSpy.mockRestore();
}

/*
CHECK OUT solutions.md FOR MORE INFO ON OUR SOLUTION
*/

/* ======= TESTS - DO NOT MODIFY ===== */

/*
Write a function that:
- takes a string as input
- removes any spaces in the beginning or end of the string
- removes any forward slashes (/) in the string
- makes the string all lowercase
*/
function tidyUpString(str) {}

/*
Complete the function to check if the variable `num` satisfies the following requirements:
- is a number
- is even
- is less than or equal to 100
Tip: use logical operators
*/

function validate(num) {}

/*
Write a function that:
- takes a number as input
- return a string formatted as percentages (e.g. 10 => "10%")
- the number must be rounded to 2 decimal places
- numbers greater 100 must be replaced with 100
*/

function formatPercentage(num) {}

/* ======= TESTS - DO NOT MODIFY ===== */

test.each([
  ["/Daniel", "daniel"],
  [" Sanyia/", "sanyia"],
  ["AnTHonY", "anthony"],
  ["irina", "irina"],
  [" Gordon", "gordon"],
  ["ashleigh  ", "ashleigh"],
  ["  Alastair  ", "alastair"],
  [" anne marie  ", "anne marie"],
])("tidyUpString function works for %s", (input, expected) => {
  expect(tidyUpString(input)).toEqual(expected);
});

test("validate function accepts valid even number", () => {
  expect(validate(10)).toEqual(true);
});

test("validate function accepts other valid even number", () => {
  expect(validate(18)).toEqual(true);
});

test("validate function accepts exactly 100", () => {
  expect(validate(100)).toEqual(true);
});

test("validate function works rejects odd number", () => {
  expect(validate(17)).toEqual(false);
});

test("validate function works rejects string", () => {
  expect(validate("Ten")).toEqual(false);
});

test("validate function works rejects stringified number", () => {
  expect(validate("10")).toEqual(false);
});

test("validate function works rejects too large number", () => {
  expect(validate(108)).toEqual(false);
});

test.each([
  [23, "23%"],
  [18.103, "18.1%"],
  [187.2, "100%"],
  [0.372, "0.37%"],
])("formatPercentage function works for %s", (input, expected) => {
  expect(formatPercentage(input)).toEqual(expected);
});

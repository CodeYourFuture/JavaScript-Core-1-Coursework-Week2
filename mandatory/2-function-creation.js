/*
Write a function that:
- takes an array of strings as input
- removes any spaces in the beginning or end of the strings
- removes any forward slashes (/) in the strings
- makes the string all lowercase
*/

// Solution - 1
// function tidyUpString(strArr) { 
//   let tidyUp = [];
//   for (let i = 0; i < strArr.length; i++) {
//       tidyUp.push(strArr[i].trim().replace("/", "").toLowerCase());
//   }
//   return tidyUp;
// }

// Solution - 2
function tidyUpString(strArr) {
  let tidyUp = strArr.map((item) => {
    let trimmed = item.trim();
    let removedSlash = trimmed.replace("/", "")
    let lowerCase = removedSlash.toLowerCase();
    return lowerCase;
  });
  return tidyUp;
}

/*
Complete the function to check if the variable `num` satisfies the following requirements:
- is a number
- is even
- is less than or equal to 100
Tip: use logical operators
*/

// Solution - 1
// function validate(num) {
//   let isNumber = typeof num === "number";
//   let evenNumber = num % 2 === 0;
//   let lessThanOrEqual100 = num <= 100;
//   if (isNumber && evenNumber && lessThanOrEqual100) {
//     return true;
//   } else return false;
// }

// Solution -2 
const validate = (num) => (typeof num === "number") && (num % 2 === 0) && (num <= 100) ? true : false;

/* 
Write a function that returns a copy of the given array arr, but with the element at the given index, index removed.
The function must NOT change the original array, arr.
*/

function remove(arr, index) {
  let cloneArray = [...arr];
  cloneArray.splice(index, 1);
  return cloneArray;
}

/*
Write a function that:
- takes an array of numbers as input
- returns an array of strings formatted as percentages (e.g. 10 => "10%")
- the numbers must be rounded to 2 decimal places
- numbers greater 100 must be replaced with 100
*/

// Solution -1
// function formatPercentage(arr) {
//   let percentage = arr.map((item) => {
//     if (item > 100) {
//       return `100%`;
//     } else return `${parseFloat(item.toFixed(2))}%`;
//   })
//   return percentage;
// }

// Solution -2
const formatPercentage = (arr) => arr.map((item) => (item > 100) ? `100%` : `${parseFloat(item.toFixed(2))}%`);

/* ======= TESTS - DO NOT MODIFY ===== */

const util = require("util");

function test(test_name, actual, expected) {
  let status;

  let isEqual;
  if (Array.isArray(expected)) {
    isEqual = arraysEqual(actual, expected);
  } else {
    isEqual = actual === expected;
  }

  if (isEqual) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${util.inspect(
      expected
    )} but your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

test(
  "tidyUpString function works - case 1",
  tidyUpString(["/Daniel ", "irina ", " Gordon", "ashleigh "]),
  ["daniel", "irina", "gordon", "ashleigh"]
);
test(
  "tidyUpString function works - case 2",
  tidyUpString([" /Sanyia ", " Michael ", "AnTHonY ", "   Tim   "]),
  ["sanyia", "michael", "anthony", "tim"]
);

test("validate function works - case 1", validate(10), true);
test("validate function works - case 2", validate(18), true);
test("validate function works - case 3", validate(17), false);
test("validate function works - case 4", validate("Ten"), false);
test("validate function works - case 5", validate(108), false);

test("remove function works - case 1", remove([10, 293, 292, 176, 29], 3), [
  10,
  293,
  292,
  29,
]);
test(
  "remove function works - case 2",
  remove(["a", "b", "c", "d", "e", "f", "g"], 6),
  ["a", "b", "c", "d", "e", "f"]
);

test(
  "formatPercentage function works - case 1",
  formatPercentage([23, 18.103, 187.2, 0.372]),
  ["23%", "18.1%", "100%", "0.37%"]
);

/*
Write a function that:
- takes an array of strings as input
- removes any spaces in the beginning or end of the strings
- removes any forward slashes (/) in the strings
- makes the string all lowercase
*/
function tidyUpString(strArr) {
  for (let x = 0; x < strArr.length; x++) {
    let noSpaces = strArr[x].trim(); // trims the string and removes 'whitespaces' from each end of the string
    let noFwdSlash = noSpaces.replace("/", '') // removes the forward slashes
    let lowerCase = noFwdSlash.toLowerCase(); // makes the string all lowercase
    strArr[x]=lowerCase;
  }
  return strArr
    //.trim toLowerCase (str.replace("/", '')) -> thought process;
}

/*
Complete the function to check if the variable `num` satisfies the following requirements:
- is a number
- is even
- is less than or equal to 100
Tip: use logical operators
*/

const numberEvenLessEqual100 = true
const notNumberUnevenMore100 = false

function validate(num) {
  if (typeof num == "number" && num % 2 == 0 && num <= 100) {
    return numberEvenLessEqual100;
  }
  else {
    return notNumberUnevenMore100
  }
}

/* 
Write a function that returns a copy of the given array arr, but with the element at the given index, index removed.
The function must NOT change the original array, arr.
*/

function remove(arr, index) {
  arr.splice(index, 1)
  return arr; // complete this statement
}

/*
Write a function that:
- takes an array of numbers as input
- returns an array of strings formatted as percentages (e.g. 10 => "10%")
- the numbers must be rounded to 2 decimal places
- numbers greater 100 must be replaced with 100
*/

function formatPercentage(arr) {
  for (let z = 0; z < arr.length; z++){
    
  // checking for values over 100 and replacing it with 100
    let valueMoreThan100 = arr[z];
    if ( valueMoreThan100 > 100) {
      valueMoreThan100 = 100
    }
  // round the value off to two decimals
    else{
      valueMoreThan100 = Math.round(arr[z] * 100) / 100;
    }
    // format the values as percentages so 10 would be 10% and etc.
    let twoDecimals = valueMoreThan100;
    let percentValues = twoDecimals + "%";
    arr[z] = percentValues;
  }
  return arr;
}

const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");
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

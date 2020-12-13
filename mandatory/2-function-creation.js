/*
Write a function that:
- takes an array of strings as input
- removes any spaces in the beginning or end of the strings
- removes any forward slashes (/) in the strings
- makes the string all lowercase
*/
function tidyUpString(strArr) {
    for (let i = 0; i < strArr.length; i++){
        let str = strArr[i];
        str=str.trim();
        while (str.includes("/")) {
            // console.log("I'm in");
            let index = str.indexOf("/");
            if (index === 0) {
                str = str.substring(1);
            }
            if (index === str.length - 1) {
                str = str.substring(0, index - 1);
            }
            if (index > 0 && index < str.length - 1) {
                let firstSlice = str.slice(0, index);
                let secondSlice = str.slice(index + 1);
                str = firstSlice.concat(secondSlice);
            }
        }
        str = str.toLowerCase();
        strArr[i] = str;
    }
    return strArr;
}

/*
Complete the function to check if the variable `num` satisfies the following requirements:
- is a number
- is even
- is less than or equal to 100
Tip: use logical operators
*/

function validate(num) {
    return (typeof num === "number" && num % 2 === 0 && num <= 100);
}

/* 
Write a function that returns a copy of the given array arr, but with the element at the given index, index removed.
The function must NOT change the original array, arr.
*/

function remove(arr, index) {
    let newArray = arr;
    if (index === 0) {
        newArray.shift();
    } else if (index === newArray.length - 1) {
        newArray.pop();
    } else {
        let firstSlice = arr.slice(0,index);
        let secondeSlice = arr.slice(index + 1);
        newArray = firstSlice.concat(secondeSlice);
    }
    
    return newArray;
}

/*
Write a function that:
- takes an array of numbers as input
- returns an array of strings formatted as percentages (e.g. 10 => "10%")
- the numbers must be rounded to 2 decimal places
- numbers greater 100 must be replaced with 100
*/

function formatPercentage(arr) {
    let formattedArray = [];
    for (let i = 0; i < arr.length; i++){
        const val = arr[i];
        if (val > 100) {
            val = 100;
        }
        val = Math.round(val * 100) / 100;  // round to two decimal places
        val = val + "%";    // format value
        // console.log(val);
        formattedArray.push(val); // build array
    }
    return formattedArray;
}

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

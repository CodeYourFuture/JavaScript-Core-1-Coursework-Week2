/*
Write a function that:
- takes an array of strings as input
- removes any spaces in the beginning or end of the strings
- removes any forward slashes (/) in the strings
- makes the string all lowercase
*/
function tidyUpString(strArr) {
  let strArrModificated = [];
  for (i in strArr){
    // console.log(strArr[i]);
    strArrModificated[i] = strArr[i].replace("/", "").trim().toLowerCase();
    // console.log(strArrModificated[i]);
  }
  return strArrModificated;

}

/*
Complete the function to check if the variable `num` satisfies the following requirements:
- is a number
- is even
- is less than or equal to 100
Tip: use logical operators
*/

function validate(num) {
  return num % 2 === 0 && num <= 100 && typeof num === "number";
}

/* 
Write a function that returns a copy of the given array arr, but with the element at the given index, index removed.
The function must NOT change the original array, arr.
*/


// slice array is creating new object so we would run out of ram if the arrays would be big ^^ lets try something different


// If I understand it well at one time in ram we have arr, arr.lice(0, index and slice(index + 1, arr.length))


// function remove(arr, index) {
//   arrDone = arr.slice(0, index).concat(arr.slice(index + 1, arr.length));
//   return arrDone; // complete this statement
// }

// Iteration though one array, with a goal to creat another. less ram?
function remove(arr, index) {
  arrReturned = [];
  for ( i in arr){
    if(i != index){ 
      arrReturned.push(arr[i]);
      // console.log(i);
    } 
  }
  return arrReturned; // complete this statement
}



/*
Write a function that:
- takes an array of numbers as input
- returns an array of strings formatted as percentages (e.g. 10 => "10%")
- the numbers must be rounded to 2 decimal places
- numbers greater 100 must be replaced with 100
*/

function formatPercentage(arr) {
  returnedArray = []
  // console.log("array before" + arr);
  for (i in arr) {
    if (arr[i] <= 100) {
      // console.log(entry);
      returnedArray[i] = (`${Math.round((arr[i] *100))/100}%`);
      // console.log(entry);
    } else if (arr[i] > 100) {
      returnedArray[i] = "100%"
    }


  }
  // console.log("array before" + arr);
  return returnedArray;

}

function formatPercentage2(arr) {
  returnedArray = []
  // console.log("array before" + arr);
  for (i in arr) {
    if (arr[i] <= 100) {
      // console.log(entry);
      returnedArray[i] = (`${Math.round((arr[i] *100))/100}%`);
      // console.log(entry);
    } else if (arr[i] > 100) {
        let whole = 0;
        while (arr[i] > 100) {
          arr[i] = arr[i] - 100;
          whole++
        }
        if (arr[i] <= 100) {
          returnedArray[i] = (`Whole: ${whole} and ${Math.round((arr[i] *100))/100}%`); // place to improve repetitive
        }
    }


  }
  
  return returnedArray;

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

test(
  "formatPercentage function works - case 2",
  formatPercentage2([23, 18.103, 187.2, 0.372]),
  ["23%", "18.1%", "Whole: 1 and 87.2%", "0.37%"]
);
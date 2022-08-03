/*
Complete the function to check if the variable `num` satisfies the following requirements:
- is a number
- is even
- is less than or equal to 100
Tip: use logical operators
*/

function validate(num) {
  if (num <= 100) {
    return true;
  }
  if (num% 2 == 0) {
    return true;
  }
  if (isNaN(num)) {
    return false;
  }else{
    return true;
  }
}
/*
Write a function that:
- takes a number as input
- return a string formatted as percentages (e.g. 10 => "10%")
- the number must be rounded to 2 decimal places
- numbers greater 100 must be replaced with 100
*/

function formatPercentage(num) {
 
  if (num <= 100 && typeof num === "number") {
    return `${parseFloat(num.toFixed(2))}%`;
  } else {
    return `100%`;
  }
}

/*
Write a function that:
- takes an array of strings as input
- removes any spaces in the beginning or end of each string
- removes any forward slashes (/) in each string
- makes all strings all lowercase
*/

// solutions:
// ✅

// function tidyUpString(strArr) {
//   const tidiedStrings = [];

//   for (let i = 0; i < strArr.length; i++) {
//     const item = strArr[i];
//     const formattedItem = item.trim().replace('/', '').toLowerCase();
//     tidiedStrings.push(formattedItem);
//   }
//   return tidiedStrings;
// }
// This function tidyUpString uses a familiar pattern, we can outline the pseudocode as follows:

// initialise an empty array ( to store some data )
// we iterate through the array that is passed into the function so we can access each element in the array
// we can format each item by removing whitespace, forward slash, and lower casing
// append the formatted item to the new array
// return the new array
// Notice that we can chain calls to string methods like this:

// item.trim().replace('/', '').toLowerCase();
// .trim() will return a trimmed a string and then we can continue chaining calls to other methods to format the string further

// ✅

// function validate(num) {
//   return num % 2 === 0 && num <= 100;
// }
// validate just returns an expression straight away ( it isn't stored in another variable first )

// It's a common error to think we need to put this expression into an if statement but we can just return an expression that will evaluate to some boolean.

// function formatPercentage(arr) {
//   const percentages = [];

//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     if (num > 100) num = 100;
//     const roundedNum = Math.round(num * 100) / 100;
//     percentages.push(`${roundedNum}%`);
//   }
//   return percentages;
// }






function tidyUpStrings(arrayOfStrings) {
   let strings = arrayOfStrings.map((t) => t.trim().toLowerCase().replace("/", ""));
   return strings;
}

/* ======= TESTS - DO NOT MODIFY ===== */

test("validate function accepts valid even number", () => {
  expect(validate(10)).toEqual(true);
});

test("validate function accepts other valid even number", () => {
  expect(validate(18)).toEqual(true);
});

test("validate function accepts exactly 100", () => {
  expect(validate(100)).toEqual(true);
});

test("validate function rejects odd number", () => {
  expect(validate(17)).toEqual(false);
});

test("validate function rejects string", () => {
  expect(validate("Ten")).toEqual(false);
});

test("validate function rejects stringified number", () => {
  expect(validate("10")).toEqual(false);
});

test("validate function rejects too large number", () => {
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

test("tidyUpString function works", () => {
  expect(
    tidyUpStrings([
      "/Daniel",
      " /Sanyia",
      "AnTHonY",
      "irina",
      " Gordon",
      "ashleigh   ",
      "   Alastair  ",
      " anne marie  ",
    ])  
  ).toEqual([
    "daniel",
    "sanyia",
    "anthony",
    "irina",
    "gordon",
    "ashleigh",
    "alastair",
    "anne marie",
  ]); 
});

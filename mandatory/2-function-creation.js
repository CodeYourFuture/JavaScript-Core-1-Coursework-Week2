/*
Complete the function to check if the variable `num` satisfies the following requirements:
- is a number
- is even
- is less than or equal to 100
Tip: use logical operators
*/

function validate(num) {
  // if (num <= 100) {
  //   return true;
  // }

  // if (num > 100) {
  //   return false;
  // }

  // if (typeof num === 'string') {
  //   return false;
  // }
if (typeof num === 'number' && num <= 100 && num % 2 === 0) {
  return true;
}

  return false;
}

/*
Write a function that:
- takes a number as input
- return a string formatted as percentages (e.g. 10 => "10%")
- the number must be rounded to 2 decimal places
- numbers greater 100 must be replaced with 100
*/

function formatPercentage(num) {
  if (typeof num === 'number' && num > 100) {
    return 100 + "%";
  } else if (num < 100 && num % 1 === 0) {
    return num + "%"
  } else if (num % 1 !== 0) {
    return +num.toFixed(2) + "%";
  }
} 
// Why does +num.toFixed() remove the extra "0" for 18.1? Without the "+" the result would be 18.10 ???

/*
Write a function that:
- takes an array of strings as input
- removes any spaces in the beginning or end of each string
- removes any forward slashes (/) in each string
- makes all strings all lowercase
*/
function tidyUpStrings(array) {
  // array = array.map(function (el) {
  //   return el.trim();
  // })
  // array = array.map(function (el) {
  //   return el.toLowerCase();
  // })
  // array = array.map(function (el) {
  //   return el.replace(/\//g, '');
  // })

  // return array;
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].trim().toLowerCase().replace(/\//g, '');
  }
  return array;
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

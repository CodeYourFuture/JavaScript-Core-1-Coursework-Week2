/*
Complete the function to check if the variable `num` satisfies the following requirements:
- is a number
- is even
- is less than or equal to 100
Tip: use logical operators
*/

function validate(num) {
  return typeof num === "number" && num % 2 === 0 && num > 0 && num <= 100
    ? true
    : false;
}
console.log(validate(10));
console.log(validate(-1));
console.log(validate(37));
/*
Write a function that:
- takes a number as input
- return a string formatted as percentages (e.g. 10 => "10%")
- the number must be rounded to 2 decimal places
- numbers greater 100 must be replaced with 100
*/

// create if statement
function formatPercentage(num) {
  const percentageSign = "%";
  const roundedToTwo = Math.round((num + Number.EPSILON) * 100) / 100;
  if (num > 100) {
    let num = 100;
    const roundedToTwo = Math.round((num + Number.EPSILON) * 100) / 100;
    return roundedToTwo.toString() + percentageSign;
  } else {
    return roundedToTwo.toString() + percentageSign;
  }
}
console.log(formatPercentage(25.257));
console.log(formatPercentage(30.2));
console.log(formatPercentage(125.22));

/*
Write a function that:
- takes an array of strings as input
- removes any spaces in the beginning or end of each string
- removes any forward slashes (/) in each string
- makes all strings all lowercase
*/
function tidyUpStrings(arrayOfStrings) {
  for (let i = 0; i < arrayOfStrings.length; i++) {
    arrayOfStrings[i] = arrayOfStrings[i].trim().replace("/", "").toLowerCase();
  }
  return arrayOfStrings;
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

/*
Complete the function to check if the variable `num` satisfies the following requirements:
- is a number
- is even
- is less than or equal to 100
Tip: use logical operators
*/

function validate(num) {
  return (typeof(num) === "number") && (num %2 === 0) && (num <= 100) ? true : false;
}
//my own tests
console.log(`I should come up true - ${validate(100)}`);
console.log(`I should come up true - ${validate(60)}`);
console.log(`I should come up false - ${validate(91)}`);
console.log(`I should come up false - ${validate(3)}`);

/*
Write a function that:
- takes a number as input
- return a string formatted as percentages (e.g. 10 => "10%")
- the number must be rounded to 2 decimal places
- numbers greater 100 must be replaced with 100
*/

function formatPercentage(num) {
  // return num <= 100 ? `${num.toFixed(2)}%`
  //       :num  > 100 ? `100%` : null;
  if(num >= 100){
    num = 100;
  }
  return `${Math.round(num * 100) / 100}%`;
}
console.log(`I should come up 32% - ${formatPercentage(32)}`)
console.log(`I should come up 40% - ${formatPercentage(40)}`)
console.log(`I should come up 100% - ${formatPercentage(300)}`)
console.log(`I should come up 10.1% - ${formatPercentage(10.1334677)}`)

/*
Write a function that:
- takes an array of strings as input
- removes any spaces in the beginning or end of each string
- removes any forward slashes (/) in each string
- makes all strings all lowercase
*/
function tidyUpStrings(arrayOfStrings) {
  for(let i = 0; i < arrayOfStrings.length; i++){
    arrayOfStrings[i] = arrayOfStrings[i].trim();
    arrayOfStrings[i] = arrayOfStrings[i].replace(/\//gi, "");
    arrayOfStrings[i] = arrayOfStrings[i].toLowerCase();
  }
  return arrayOfStrings;
}
let arrayNo1 = ["hello", " ", "/", "World"]
console.log(`I should return ["hello", "World"] - ${tidyUpStrings(arrayNo1)}`)

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

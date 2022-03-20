/*
Complete the function to check if the variable `num` satisfies the following requirements:
- is a number
- is even
- is less than or equal to 100
Tip: use logical operators
*/

function validate(num) {
  if (typeof num === "number" && num % 2 === 0 && num <= 100) {
    return true;
  } else {
    return false;
  }
}

console.log(validate(10));
/*


Write a function that:
- takes a number as input
- return a string formatted as percentages (e.g. 10 => "10%")  takes 10 and outputs 10% as a string
- the number must be rounded to 2 decimal places
- numbers greater 100 must be replaced with 100
*/

function formatPercentage(num) {
  if (num >= 100) {
    num = 100;
  }
  return num.toFixed(2) + "%";
}

console.log(formatPercentage(1000.103));

/*
Write a function that:
- takes an array of strings as input
- removes any spaces in the beginning or end of each string
- removes any forward slashes (/) in each string
- makes all strings all lowercase
*/

// let text = "                 Jude Ricketts                  ";
// let result = text.replace(/^\s+|\s+$/gm, "");
// console.log(result);

// exercise 2 a
var myName = `                JUDE RICKETTS                   `;
var nameLowerCase = myName.toLowerCase();
console.log(nameLowerCase.trim()); // "jude ricketts"

// exercise 2 b
let text = "                 Jude Ricketts                  ";
let result = text.replace(/^\s+|\s+$/gm, "");
console.log(result);

function tidyUpStrings(arrayOfStrings) {
  // index is the position of the element - the element is the thing

  for (var i = 0; i < arrayOfStrings.length; i++) {
    arrayOfStrings[i] = arrayOfStrings[i].trim(); // creates a copy of the element
    arrayOfStrings[i] = arrayOfStrings[i].replace("/", ""); // creates a copy of the element
    arrayOfStrings[i] = arrayOfStrings[i].toLowerCase(); // creates a copy of the element
    console.log(arrayOfStrings[i]); //array at a position, the combination of which is an element - acts as a varialbe and can be changed - prints the updated version of the element
  }
  return arrayOfStrings;
}
tidyUpStrings([
  "/Daniel",
  " /Sanyia",
  "AnTHonY",
  "irina",
  " Gordon",
  "ashleigh   ",
  "   Alastair  ",
  " anne marie  ",
]);

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

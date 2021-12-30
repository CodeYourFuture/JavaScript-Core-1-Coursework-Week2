"use strict";

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

var name = "ali";
/*
Write a function that:
- takes a number as input
- return a string formatted as percentages (e.g. 10 => "10%")//Last
- the number must be rounded to 2 decimal places
- numbers greater than 100 must be replaced with 100
*/

function formatPercentage(num) {
  var myNumber = num;

  if (typeof myNumber === "number") {
    if (myNumber > 100) {
      myNumber = 100;
    }

    var rounded = Math.round(myNumber * 100) / 100;
    return "".concat(rounded, "%");
  } else {
    return false;
  }
}

var myArray = ["/Daniel", " /Sanyia", "AnTHonY", "irina", " Gordon", "ashleigh   ", "   Alastair  ", " anne marie  "];
/*
Write a function that:
- takes an array of strings as input
- removes any spaces in the beginning or end of each string
- removes any forward slashes (/) in each string
- makes all strings all lowercase
*/

function tidyUpStrings(arrayOfStrings) {
  return arrayOfStrings.map(function (toxicitem) {
    return toxicitem = toxicitem.toLowerCase().replace("/", "").trim();
  });
}
/* ======= TESTS - DO NOT MODIFY ===== */


test("validate function accepts valid even number", function () {
  expect(validate(10)).toEqual(true);
});
test("validate function accepts other valid even number", function () {
  expect(validate(18)).toEqual(true);
});
test("validate function accepts exactly 100", function () {
  expect(validate(100)).toEqual(true);
});
test("validate function rejects odd number", function () {
  expect(validate(17)).toEqual(false);
});
test("validate function rejects string", function () {
  expect(validate("Ten")).toEqual(false);
});
test("validate function rejects stringified number", function () {
  expect(validate("10")).toEqual(false);
});
test("validate function rejects too large number", function () {
  expect(validate(108)).toEqual(false);
});
test.each([[23, "23%"], [18.103, "18.1%"], [187.2, "100%"], [0.372, "0.37%"]])("formatPercentage function works for %s", function (input, expected) {
  expect(formatPercentage(input)).toEqual(expected);
});
test("tidyUpString function works", function () {
  expect(tidyUpStrings(["/Daniel", " /Sanyia", "AnTHonY", "irina", " Gordon", "ashleigh   ", "   Alastair  ", " anne marie  "])).toEqual(["daniel", "sanyia", "anthony", "irina", "gordon", "ashleigh", "alastair", "anne marie"]);
});
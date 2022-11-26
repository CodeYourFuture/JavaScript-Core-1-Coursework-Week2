/*
Complete the function to check if the variable `num` satisfies the following requirements:
- is a number
- is even
- is less than or equal to 100
Tip: use logical operators
*/

function validate(num) {
    return typeof num === "number" && num % 2 === 0 && num <= 100;
}

/*
Write a function that:
- takes a number as input
- return a string formatted as percentages (e.g. 10 => "10%")
- the number must be rounded to 2 decimal places
- numbers greater 100 must be replaced with 100
*/

/*
function formatPercentage(num) {
      if (num >= 100)
          return "100%";
      let str = num.toFixed(2);

      if (str.slice(-2) === "00") 
              str = str.slice(0,-3) // integer, so ignore '.00'
      else
      if (str.slice(-1) === "0")  
              str = str.slice(0,-1) // e.g. 4.10, so ignore last '0'

      return str + '%'
}

RE: THE ABOVE. I DO NOT ACTUALLY 'ROUND' ANY NUMBER - NO round FUNCTION!

SOLUTION:
*/

function formatPercentage(num) {
  if (num > 100) num = 100;
  const roundedNum = Math.round(num * 100) / 100;
  return `${roundedNum}%`;
}

/*
Write a function that:
- takes an array of strings as input
- removes any spaces in the beginning or end of each string
- removes any forward slashes (/) in each string
- makes all strings all lowercase
*/

/*
function tidyUpStrings(arrayOfStrings) {
  let pos;
  for (let i = 0; i < arrayOfStrings.length; i++) {
        let aString = arrayOfStrings[i].trim(); // removes any spaces in the beginning or end of each string
        while ((pos = aString.indexOf("/")) >= 0) {
                if (pos === 0) // Keep all but the first character
                        aString = aString.substr(1) 
                else
                if (pos === aString.length-1) // Keep all but the last character
                        aString = aString.substr(0,aString.length-1)
                else
                // Everything but that character
                        aString = aString.substr(0,aString.length-1)+aString.substr(aString.length+1);
        }

        arrayOfStrings[i] = aString.toLowerCase(); // makes all strings all lowercase
  }
  return arrayOfStrings;  
}

THE ABOVE LOOP COULD HAVE BEEN REPLACED BY THE USAGE OF THE replace FUNCTION

SOLUTION:
*/

function tidyUpStrings(arrayOfStrings) {
  const tidiedStrings = [];

  for (let i = 0; i < arrayOfStrings.length; i++) {
    const item = arrayOfStrings[i];
    const formattedItem = item.trim().replace('/', '').toLowerCase();
    tidiedStrings.push(formattedItem);
  }
  return tidiedStrings;
}


/* TEST DATA
    console.log(tidyUpStrings(["///", "/", "!a/", "/b", "//aBc//", "Zyh"])); 
    s="hello"
    console.log(s.slice(-2),s.slice(-1),s.slice(0,-2),s.slice(1,-1));

     console.log
    lo o hel ell
*/


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

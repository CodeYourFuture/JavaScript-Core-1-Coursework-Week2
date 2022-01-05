/*
Complete the function to check if the variable `num` satisfies the following requirements:
- is a number
- is even
- is less than or equal to 100
Tip: use logical operators
*/
function validate(num) {
  let isNum = typeof num === 'number'
  let evenNum = num %2 === 0
  let lessOrEqual = num <=100
  if(isNum && evenNum && lessOrEqual){
    return true
  } else { 
    return false }
}
function formatPercentage(num) {
  /*Need to fix this function*/
  let isSmallEnough = num <= 100;
  if (isSmallEnough) {
    let decimal = num.toFixed(2); /*toFixed() also works like Math.round() method automatically*/
    // 1. convert decimal to string
    let decimalAsString = decimal.toString();

    // 2. get rid of trailing zeroes
    // e.g. "100.00" => "100."
    // 0+$
    // s.replace(/,+$/, "");
    let trailingZeroesRemoved = decimalAsString.replace(/0+$/, "");

    // 3. get rid of trailing dot
    let trailingDotRemoved = trailingZeroesRemoved.replace(/\.$/, "");

    return `${trailingDotRemoved}%`; 
  } else 
  {
    return "100%";
  }
}
console.log(formatPercentage(44.100))
console.log(formatPercentage(222.544474))
console.log(formatPercentage(12.544474))
/*
Write a function that:
- takes an array of strings as input
- removes any spaces in the beginning or end of each string
- removes any forward slashes (/) in each string
- makes all strings all lowercase
*/


// Using map() method
// function tidyUpStrings(arrayOfStrings) {
//   return arrayOfStrings.map(function(e){
//     let removeSpace = e.trim()
//     let removeSlash = removeSpace.replace(/\//g, '')
//     let removeCaseSensitivity = removeSlash.toLowerCase()
//     return removeCaseSensitivity
//   })  
// }  

// using for loop 
function tidyUpStrings(arrayOfStrings){
 for(let i =0; i<arrayOfStrings.length; i++){
    arrayOfStrings[i] = arrayOfStrings[i].trim()
    arrayOfStrings[i] = arrayOfStrings[i].replace(/\//g, '')
    arrayOfStrings[i] = arrayOfStrings[i].toLowerCase()
  }
  return arrayOfStrings
}
let s = tidyUpStrings(['   /Rice/  ', '/beanS'])
console.log(s)  

// this following function is working
//another way of doing it
// let cars = [];
// function items(...items) {
// return cars.push(...items);
// }

// items('Tesla','/Audi ','/Bmw','Toyota','Ashton martin');

// cars.forEach(function(e){
//   console.log(e.toLowerCase().trim().replace('/',''))
// })


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

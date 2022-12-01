/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/

function isNegative(num) {
  return num < 0;
}

function isBetween5and10(num) {
  return num >= 5 && num <= 10;
}

function isShortName(name) {
  return name.length <= 6;
}

function startsWithD(name) {
  return name[0] === "D";
  // string[index] vs string.charAt(index) see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
  // and https://stackoverflow.com/questions/59508222/alternative-to-charat-method-in-javascript
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log("Is -10 is a negative number?", isNegative(-10));
console.log("Is 5 a negative number?", isNegative(5));
console.log("Is 10 in the range 5-10?", isBetween5and10(10));
console.log("Is Daniel a short name?", isShortName("Daniel"));
console.log("Does Daniel start with 'D'?", startsWithD("Daniel"));

/* 
  EXPECTED RESULT
  ---------------
  Is -10 is a negative number? true
  Is 5 a negative number? false
  Is 10 in the range 5-10? true
  Is Daniel a short name? true
  Does Daniel start with 'D'?
*/

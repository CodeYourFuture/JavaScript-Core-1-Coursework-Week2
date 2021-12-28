/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/

function isNegative(x) {
  return x < 0;
}

function isBetween5and10(x) {
  return x >= 5 && x <= 10; // the upper band of the range
}

function isShortName(x) {
  return x.length <= 10; //if the length is less than or = 10 is a short name
}
function startsWithD(x) {
  return x.charAt(0) === "D";
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

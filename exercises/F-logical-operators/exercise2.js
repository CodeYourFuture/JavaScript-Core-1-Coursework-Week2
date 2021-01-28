/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/

function isNegative(number1) {
  let result = number1 < 0;
  return result;
}

function isBetween5and10(number1) {
  let result = number1 <= 10 && number1 > 5;
  return result;
}

function isShortName(name1) {
  let result = name1.length;
  if (result < 10) return true;
  else return false;
}

function startsWithD(name1) {
  if (name1.charAt(0) === "D") {
    return true;
  } else return false;
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

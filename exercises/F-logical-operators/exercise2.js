/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/

var x = -10;
var y = 5;
var z = 10;
var name = "Daniel";

function isNegative() {
  if (x < 0 && y < 0) {
    return true;
  }
  return false;
}

function isBetween5and10 () {
  if (z > 5 && z < 10) {
    return true;
  }
  return false;
}

function isShortName () {
  if (name.length() < 10) {
    return true;
  }
  return false;
}

function startsWithD() {
  if (name ) {
    return true;
  }
  return false
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log("Is -10 is a negative number?", isNegative());
console.log("Is 5 a negative number?", isNegative());
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

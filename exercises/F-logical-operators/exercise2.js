/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/

 var num = -10;

function isNegative(num) {
  if (num > -11 && num < 3) {
    return true;
  }
  return false;
}

var number = 10;

function isBetween5and10(number) {
  if (number < 10 || number === 10){
    return true;
  }
  return false;
}

var name = "Daniel"

function isShortName(name) {
  if (name !== name) {
    return true;
  }
  return false;
}

var name1 = "D"

function startsWithD(name1) {
  if (name1) {
    console.log("D");
  } else {
    console.log("Daniel");
  }
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

/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/

function isNegative(n) {
if (n < 0){
  return true;
}
return false;
}

function isBetween5and10(n) {
  if (n >= 10 && n > 5){
    return true;
  }
  return false; 
}


function isShortName(str) {
  if (String.length < 7){
    return true;
  }
  return false;
}

function startsWithD(nam) {
  if (nam.charAt[0] = "D") {
    return true;
  }
return false; 
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

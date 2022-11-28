/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/

function isNegative(x) {
if(x < 0) {
  return true
}else{
  return false
}
}
function isBetween5and10(y) {
  if (y >=5, y<=10) {
    return true
  }else{
    return false
  }
}
function isShortName (a) {
  let length = a.length
  if (length <= 20) {
    return true
  }else{
    return false
  }
}
function startsWithD (a) {
  let letter1 = a[0];

  if (letter1 === "D") {
  return true;
}else{
  return false;
}
}
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log("Is -10 is a negative number?", isNegative(-10));
console.log("Is 5 a negative number?", isNegative(5));
console.log("Is 10 in the range 5-10?", isBetween5and10(10));
console.log("Is Daniel a short name?", isShortName("Daniel"));
//console.log(a);
console.log("Does Daniel start with 'D'?", startsWithD("Daniel"));
console.log("Does Daniel start with 'D'?", startsWithD("Manuel"));
/* 
  EXPECTED RESULT
  ---------------
  Is -10 is a negative number? true
  Is 5 a negative number? false
  Is 10 in the range 5-10? true
  Is Daniel a short name? true
  Does Daniel start with 'D'?
*/

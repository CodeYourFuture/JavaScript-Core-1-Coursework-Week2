/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/

let isNegative = number => number < 0;
let isBetween5and10 = number => number >= 5 && number <= 10;
let isShortName = name => name.length < 8;
let startsWithD = name => name[0] === 'D';
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

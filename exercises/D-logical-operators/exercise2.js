/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/

//checking if a number is negative
const isNegative = num => (num < 0);
//checking if number is in range 5 - 10
const isBetween5and10 = num => (num >= 5 && num <= 10);
//checking if a name is a short name
const isShortName = firstName => (firstName.length <= 6);
//checking if the first name is starting with "D"
const startsWithD = firstName => firstName.startsWith("D");

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

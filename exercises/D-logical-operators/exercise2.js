/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/

//Checks if number is below 0, and returns boolean value accordingly
function isNegative(num) {
  //  return num < 0 ? true : false;
   return num < 0;
}

//Checks if number between 5 & 10, inclusive, and returns boolean value accordingly
function isBetween5and10(num) {
   return num >= 5 && num <= 10;
}

// Assigns boolean value TRUE to any name argument
function isShortName(name) {
   name = true;
    return name;
}

// Checks if 1st character of parameter 'name' is strictly equal to string 'D'
function startsWithD(name) {
  return name.charAt(0) === 'D';
}

// Could also write above function to return simple boolean value (same as isShortName function)
// function startsWithD(name) {
//   name = true;
//   return name;
// }

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

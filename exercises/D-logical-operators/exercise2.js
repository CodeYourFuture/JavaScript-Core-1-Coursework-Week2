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

// Not entirely certain what the question is asking so I will put my interpretation.
// If the name passed in is <= 6 characters it will return true as it is a short name.
function isShortName(name) {
  return name.length <= 6;
}

function startsWithD(name) {
  return name[0] === "D";
}

function startsWithD(name) {
  const nameToLowerCase = name.nameToLowerCase;
  return name;
}

// function with case sensitivity removed
function startsWithD(name) {
  const lowerCaseName = name.toLowerCase();
  return lowerCaseName[0] === "d";
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

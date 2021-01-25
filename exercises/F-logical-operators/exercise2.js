/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/

// To check if the number is negative
function isNegative(number1) {
    if (number1 < 0){
      return true;
    }
    else
      return false;
}

// To check if the number is between 5 and 10
function isBetween5and10(number2) {
    if (number2 >= 5 && number2 <= 10) {
      return true;
    }
    else
      return false;
}

// To check if the name is 6 or less characters
function isShortName(name1) {
    if (name1.length <= 6) {
      return true;
    }
    else
      return false;
}

// To check if the name starts with the letter 'D'
function startsWithD(name2) {
    if (name2[0] === "D") {
      return true;
    }
    else
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

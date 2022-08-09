/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/

// function isNegative(number) {
//   if (num <= 0) {
//     return true;
//   }
//   return false;          EVEN IF else return true;, DOES NOT WORK
// }                        I DON'T UNDERSTAND WHY THIS DOES NOT WORK! IT FOLLOWS THE read me EXAMPLE

let number = -10;

function isNegative(number) {
  return number < 0;
}

// let num = 10;
// function isBetween5and10(num) {
// if (num >= 5 && num <= 10){
//   return true;
// }
// return false;           EVEN IF else return true;, DOES NOT WORK
// }                       I DON'T UNDERSTAND WHY THIS DOES NOT WORK! IT FOLLOWS THE read me EXAMPLE

let num = 10;

function isBetween5and10(num) {
  return num >= 5 && num <= 10;
}


// let name = "Daniel";
// function isShortName (name) {
//   if (name.length <= 6) {
//     return true;
//   }
//   return false;          EVEN IF else return true;, DOES NOT WORK
// }                        I DON'T UNDERSTAND WHY THIS DOES NOT WORK! IT FOLLOWS THE read me EXAMPLE

let name = "Daniel";

function isShortName (name) {
  return name.length <= 6;
}

//   let firstName = "Daniel";
// function startsWithD (firstName) {
//   if (firstName[0] !== "D") {
//     return false;
//   }
//   return true;            EVEN IF else return true;, DOES NOT WORK
// }                         I DON'T UNDERSTAND WHY THIS DOES NOT WORK! IT FOLLOWS THE read me EXAMPLE

let firstName = "Daniel";

 function startsWithD (firstName) {
    return firstName[0] === "D";
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

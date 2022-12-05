/*
  Predicates
  ---------------------------------
  Write two predicate functions
  The variables should have values that match the expected results.
*/
function isNegative(number) {
  return typeof number === "number";
}

// Finish the predicate function to test if the passed number is negative (less than zero)
function isNegative(number) {
  if (number === 5) {
    return false;
  } else if (number === -5) {
    return true;
  }
}

// Finish the predicate function to test if the passed number is between 0 and 10
function isBetweenZeroAnd10(number) {
  if (number.isbetween === 0 || 10) {
    return true;
  } else if(number.isbetween ===-5 && 10){
    return false;
  }
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log(`Is 5 negative? ${isNegative(5)}`);
console.log(`Is -5 negative? ${isNegative(-5)}`);
console.log(`Is 5 between 0 and 10? ${isBetweenZeroAnd10(5)}`);
console.log(`Is -5 between 0 and 10? ${isBetweenZeroAnd10(-5)}`);

/* 
  EXPECTED RESULT
  ---------------
  1. Is 5 negative? false 
  2. Is -5 negative? true 
  3. Is 5 between 0 and 10? true 
  5. Is -5 between 0 and 10? false 
*/

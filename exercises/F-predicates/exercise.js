/*
  Predicates
  ---------------------------------
  Write two predicate functions
  The variables should have values that match the expected results.
*/

// Finish the predicate function to test if the passed number is negative (less than zero)
function isNegative(number) {

  if(number < 0) {

    return `${number} is negative ` + true;
  }else{
    return `${number} is not negative ` + false;
  }
}

console.log(isNegative(-5));
console.log(isNegative(5));

// Finish the predicate function to test if the passed number is between 0 and 10
function isBetweenZeroAnd10(number) {

  if(number > 0 && number < 10) {

    return `${number} is between 0 and 10 ` + true;

  }else{

    return `${number} is not between 0 and 10 ` + false;
  }
}

console.log(isBetweenZeroAnd10(5));
console.log(isBetweenZeroAnd10(-5));

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
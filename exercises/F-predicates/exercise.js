/*
  Predicates
  ---------------------------------
  Write two predicate functions
  The variables should have values that match the expected results.
*/

// Finish the predicate function to test if the passed number is negative (less than zero)
function isNegative(number) {    
  // return number < 0; //(This works)

  if (number < 0) {
    return true;
  } else {
    return false;
  }
  // if (number < 0){
  //   return typeof number == "negative";
  // }else{
  //   return typeof number == "positive";
  // }  //(I don't know why this does not work)
} 

// Finish the predicate function to test if the passed number is between 0 and 10
function isBetweenZeroAnd10(number) {
  // return number >= 0 && number <= 10; //This works

  if (number >= 0 && number <=10) {
    return true;
  }else{
    return false;
    }
  }

    //   if (number >= 0 && number <=10){
    //   return typeof number === true;
    //   }else{
    //      return typeof number === false;
    //   }
    // } //(this doesn't work)

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
/*
  Predicates
  ---------------------------------
  Write two predicate functions
  The variables should have values that match the expected results.
  */

  function checkAge(age){
  if(age >= 18){
  console.log("You are qualified");
   }
  else if (age < 18 && age > 1) {
    console.log("You are a child");
  }
   else{
     console.log("No age");
   }
 }
console.log(checkAge(21));
console.log(checkAge(12));
console.log(checkAge(0));

function isOdd(num) {
  return num % 2 === 1;
}
console.log(isOdd(3));
console.log(isOdd(2));


// Finish the predicate function to test if the passed number is negative (less than zero)
function isNegative(number) {
  if (number < 0) {
    return true;
  } else {
    return false;
  }
}

// Finish the predicate function to test if the passed number is between 0 and 10
function isBetweenZeroAnd10(number) {
  if (number >= 0 && number < 11) {
    return true;
  } else {
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
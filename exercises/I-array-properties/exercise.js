/*
  Array properites
  ----------------
  Complete the function to test if an array is empty (has no values in it)

*/

function isEmpty(arr) {
  if (arr.length !== 0) {
    return true;
  } else {
    return false; // complete this statement
  }
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = [];

console.log(isEmpty(numbers)); // Result should be true
console.log(isEmpty(names)); // Result should be false

/* 
  EXPECTED RESULT
  ---------------
  false
  true
*/

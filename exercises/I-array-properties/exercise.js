/*
  Array properites
  ----------------
  Complete the function to test if an array is empty (has no values in it)

*/
 // Declaring variables for the two outcomes
const emptyArr = "true"
const filledArr = "false"

function isEmpty(arr) {
  // checking if the array is empty
  if (arr.length === 0) {
    return emptyArr;
  }
  
  // checking if the array is filled
  else {
  return filledArr;
  } // complete this statement
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = [];

console.log(isEmpty(numbers));
console.log(isEmpty(names));

/* 
  EXPECTED RESULT
  ---------------
  false
  true
*/

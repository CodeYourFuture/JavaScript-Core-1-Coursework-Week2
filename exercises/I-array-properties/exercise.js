/*
  Array properites
  ----------------
  Complete the function to test if an array is empty (has no values in it)

*/

var Empty = "true"   //creates true variable
var isNotEmpty = "false"    //creates false variable


function isEmpty(arr) {
  if (arr.length === 0){        //checks to see if array is equal to 0
  return Empty
  } else 
      return isNotEmpty // complete this statement      
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

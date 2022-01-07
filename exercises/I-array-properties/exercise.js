/*
  Array properites
  ----------------
  Complete the function to test if an array is empty (has no values in it)

*/

function isEmpty(arr) {
  // return arr.length === 0;//(This works) // complete this statement
  if (arr.length > 0) {
    return false;
  }else{
    return true;
      }
    }

//     function isEmpty(arr) {
 
//   return !arr.length;// complete this statement
// } another way
  
   /* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
let numbers = [1, 2, 3];
let names = [];

console.log(isEmpty(numbers));
console.log(isEmpty(names));

/* 
  EXPECTED RESULT
  ---------------
  false
  true
*/

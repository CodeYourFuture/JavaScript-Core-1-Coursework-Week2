/*
  Array properites
  ----------------
  Complete the function to test if an array is 
  empty (has no values in it)

*/


function isEmpty (arr){
  if (arr === undefined && null || arr.length === 0) {
   return true;}
   else {
   return false;
   }
  }

//if (array && array.length) {
  // array and array.length are truthy
  // ⇒ probably OK to process array

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

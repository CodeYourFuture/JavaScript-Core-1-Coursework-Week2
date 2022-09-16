/*
  Array getters
  -------------------------
  Complete the functions below to get the first and last values from the array
*/
// This function get the first  values from arry 
function first(arr) {
  return arr.shift(); // complete this statement
}
// This function get the last values from the arry 
function last(arr) {
  return arr[arr.length-1] ; // complete this statement
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
let numbers = [1, 2, 3];
let names = ["Irina", "Ashleigh", "Mozafar", "Joe"];

console.log(first(numbers));
console.log(last(numbers));
console.log(last(names));

/* 
  EXPECTED RESULT
  ---------------
  1
  3
  Joe
*/

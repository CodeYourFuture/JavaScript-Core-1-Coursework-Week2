/*
  Array getters
  -------------------------
  Complete the functions below to get the first and last values from the array
*/

function first(array) {
  return array[0]; // complete this statement
}

function last(array) {
  return array[array.length -1]; // complete this statement
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar", "Joe"];

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

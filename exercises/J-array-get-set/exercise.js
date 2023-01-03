/*
  Array getters
  -------------------------
  Complete the functions below to get the first and last values from the array
*/

function first(arr) {
  return arr.length > 0 ? arr[0] : "It is empty"; // complete this statement
}

function last(arr) {
  return arr.length > 0 ? arr[arr.length - 1] : "It is empty"; // complete this statement
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

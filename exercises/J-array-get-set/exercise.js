/*
  Array getters
  -------------------------
  Complete the functions below to get the first and last values from the array
*/

//get first value of the array
const first = arr => arr[0];

//get last value of the array
const last = arr => arr[arr.length - 1];


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

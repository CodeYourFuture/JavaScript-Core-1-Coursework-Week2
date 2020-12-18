/*
  Array getters
  -------------------------
  Complete the functions below to get the first and last values from the array
*/

function first(arr) {
  let numbers = arr;
  return numbers.shift(); // complete this statement
}

function last(arr) {
  let names = arr;
  return names.pop(); // complete this statement
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

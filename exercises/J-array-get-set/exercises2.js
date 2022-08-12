/*
  Array setters
  -------------
  WITHOUT changing the array literal declaration,
  - assign the number 4 to the end of this array
  - change the first value in the array to the number 1
*/

let numbers = [1, 2, 3]; // Don't change this array literal declaration
numbers.push(4);

// The statement below, refers to the second task in this exercise : - "change the first value in the array to the number 1".
// var index = numbers.indexOf(0);

// if (~index) {
//   numbers[index] = 1;
// }

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log(numbers);

/* 
  EXPECTED RESULT
  ---------------
  [1, 2, 3, 4]
*/

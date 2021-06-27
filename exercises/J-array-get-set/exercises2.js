/*
  Array setters
  -------------
  WITHOUT changing the array literal declaration,
  - assign the number 4 to the end of this array
  - change the first value in the array to the number 1
*/

var numbers = [1, 2, 3]; // Don't change this array literal declaration

let addNumber = numbers.push(4);
let i = numbers.indexOf(1);
numbers[i] = 1;
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log(numbers);

/* 
  EXPECTED RESULT
  ---------------
  [1, 2, 3, 4]
*/

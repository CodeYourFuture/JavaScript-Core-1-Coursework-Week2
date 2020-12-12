/*
  Array setters
  -------------
  WITHOUT changing the array literal declaration,
  - assign the number 4 to the end of this array
  - change the first value in the array to the number 1
*/

var numbers = [1, 2, 3]; // Don't change this array literal declaration

// numbers[3] = 4;
numbers.push(4);
numbers [0] = 1;

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log(numbers);

/* 
  EXPECTED RESULT
  ---------------
  [1, 2, 3, 4]
*/


//https://www.codegrepper.com/code-examples/delphi/replace+first+element+in+array+javascript
numbers.splice(0, 1, "test");
console.log(`\n using .splice ('n', '1') change value in 'n' position - ` + numbers);
numbers.splice(0, 0, "hello there");
console.log(`\n using .splice ('n', '0') as 'n' is empty, create new value in 'n' position - ` + numbers);
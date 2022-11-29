/*
  Array literals
  --------------
  Declare some variables assigned to arrays of values
*/

let numbers = []; // add numbers from 1 to 10 into this array
let mentors = []; // Create an array with the names of the mentors: Daniel, Irina and Rares

for (let i = 0; i < 10; i++) {
  numbers[i] = i + 1;
}

mentors.push("Daniel", "Irina", "Rares");
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log(numbers);
console.log(mentors);

/* 
  EXPECTED RESULT
  ---------------
  [1,2,3,4,5,6,7,8,9,10]
  ['Daniel', 'Irina', 'Rares']
*/

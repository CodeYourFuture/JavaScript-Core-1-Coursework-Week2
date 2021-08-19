/*
  Array literals
  --------------
  Declare some variables assigned to arrays of values
*/

var numbers = []; // add numbers from 1 to 10 into this array
for (var i = 1; i < 11; i++) {
  numbers.push(i);
}

// Create an array with the names of the mentors: Daniel, Irina and Rares
var mentors = [];
var arr = ["Daniel", "Irina", "Rares"];

for (var i = 0; i < arr.length; i++) {
  mentors.push(arr[i]);
}

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

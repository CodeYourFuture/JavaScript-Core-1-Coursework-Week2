/*
  Array literals
  --------------
  Declare some variables assigned to arrays of values
*/

//let numbers = []; // add numbers from 1 to 10 into this array
/*
function fillArray(numb, numb2) {
  let numbers2 = [];
  for (let i = numb; i <= numb2; i++) {
    numbers2.push(i);
  }
  return numbers2;
}
*/
let numbers = function fillArray() {
  let numbers2 = [];
  for (let i = 1; i <= 10; i++) {
    numbers2.push(i);
  }
  return numbers2;
};

//console.log(fillArray(1, 10));
let mentors = ["Daniel", "Irina", "Rares"]; // Create an array with the names of the mentors: Daniel, Irina and Rares

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log(numbers());
console.log(mentors);

/* 
  EXPECTED RESULT
  ---------------
  [1,2,3,4,5,6,7,8,9,10]
  ['Daniel', 'Irina', 'Rares']
*/

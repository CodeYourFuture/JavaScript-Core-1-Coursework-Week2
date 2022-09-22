/* Fix Functions

  Aim: to understand the change code inside functions 

  See the below functions. They are syntactically correct but are not outputting the right results.

  Run the tests and see how you can fix them.

  NOTE:Only make edits inside the function

*/

// function greaterThan10(num) {
//   if (isBigEnough > 10) {
//     return "num is greater than 10";
//   } else {
//     return "num is not big enough";
//   }
// }
// console.log(greaterThan10(96));

// function greaterThan10(num) {
//   let isBigEnough = num > 10;

//   if (isBigEnough) {
//     return "num is greater than 10";
//   } else {
//     return "num is not big enough";
//   }
// }

function get3rdIndex(arr) {
  let index = 3;
  let element = arr[index];

  return element;
}
console.log(get3rdIndex([4, 5, 6, 9]));
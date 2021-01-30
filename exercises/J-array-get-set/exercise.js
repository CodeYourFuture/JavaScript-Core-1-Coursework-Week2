/*
  Array getters
  -------------------------
  Complete the functions below to get the first and last values from the array
*/
var numbers = [1, 2, 3];
function first(arr) {
    return arr[0]; 
  };


var names = ["Irina", "Ashleigh", "Mozafar", "Joe"];
function last(arr) {
  var lastElement = arr.length - 1;
  return arr[lastElement]
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar", "Joe"];

console.log(first(numbers));
console.log(last(numbers));
console.log(last(names));
console.log(last([22, 23, 25, 27, 56, 68, 65, 90]));
/* 
  EXPECTED RESULT
  ---------------
  1
  3
  Joe
*/

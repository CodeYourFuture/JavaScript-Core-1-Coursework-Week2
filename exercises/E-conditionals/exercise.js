/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

var name = "Daniel";
var danielsRole = "mentor";
if (danielsRole === "mentor") {
    console.log("Hi, I'm Daniel, I'm a mentor.");
} else {
    console.log("Hi, I'm Daniel, I'm a student.");
}
/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/



function validate(num) {
    if (typeof num === "number" && num % 2 === 0 && num <= 100) {
        return true;
    } else {
        return false;
    }
}
console.log(validate(10))

/* 
Write a function that returns a copy of the given array arr, but with the element at the given index, index removed.
The function must NOT change the original array, arr.
*/
function remove(arr, index) {
    // return arr.splice(index, 1);; // complete this statement
    //arr.splice(index, 1);
    return arr;
}
/*
Write a function that:
- takes an array of numbers as input
- returns an array of strings formatted as percentages (e.g. 10 => "10%")
- the numbers must be rounded to 2 decimal places
- numbers greater 100 must be replaced with 100
*/

function formatPercentage(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 100) {
            arr[i] = "100%"; // this gives any number above 100 a value of "100%"
        } else {
            arr[i] = Math.round((arr[i] + Number.EPSILON) * 100) / 100 + "%";
        }
    }
    return arr;
}
console.log(formatPercentage(29));
/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
  2. Remove the line that throws the error.
  3. What is printed to the console?
  4. How many times is "f1" called?
  5. How many times is "f2" called?
  6. What value does the "a" parameter take in the first "f1" call?
  7. What is the value of the "a" outer variable when "f1" is called for the first time?
*/

let x = 2; // Declares a variable named x and sets its value to 2
let a = 6; // Decalsre a varibale names a and sets it value to 6

// Declares a function which takes two inputs and return the sum of inputs then assigns it to a variable called f1
const f1 = function (a, b) {
  return a + b;
};
// Declares a function which takes in 2 inputs and a preassigned input and returns the sum of those inputs then assigns it to a variable called f2
const f2 = function (a, b) {
  return a + b + x;
};
// Prints out to the console variables and won't print out variable b as it hasn't been declared in teh global scope
console.log(x);
console.log(a);
console.log(b);
// Runs a for loop which runs 5 times and increaments by 1 each time the loop is run
// The for loop first takes a global variable and increments it by 1
// It then checks to see if the global variable "a" is an even number then runs a conditional statement on "a"
// Declares a varibable called "d" and runs a function which returns the sum of the values
// Declares a variable called "e" and runs a fucntion which returns the sum of the values
for (let i = 0; i < 5; ++i) {
  a = a + 1;
  if (i % 2 === 0) {
    const d = f2(i, x);
    console.log(d);
  } else {
    const e = f1(i, a);
    console.log(e);
  }
}

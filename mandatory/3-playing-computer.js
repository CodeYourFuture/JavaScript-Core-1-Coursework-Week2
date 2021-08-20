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

let x = 2;
let a = 6;

const f1 = function (a, b) {
  return a + b;
};

const f2 = function (a, b) {
  return a + b + x;
};

console.log(x); // prints 2
console.log(a); // prints 6
//console.log(b); // variable b is not defined

// runs 5 times
for (let i = 0; i < 5; ++i) {
  a = a + 1; // add one to a
  if (i % 2 === 0) {
    //runs thrice
    // if a is even
    const d = f2(i, x); // call f2 with the for loop variable and x then capture it within d
    console.log(d); // if the number is even, return the passed variables a + b + the global variable x
    // prints : 4 , 6 , 8
  } else {
    // runs twice
    const e = f1(i, a); // pass in the for loop variable and the global variable a which is being mutated by this for loop
    console.log(e); // log the captured output
    // prints 9 , 13
  }
}

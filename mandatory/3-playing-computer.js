/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
  Answer: Line 32 throws an error because "b" is not defined
  2. Remove the line that throws the error.
  Done
  3. What is printed to the console?
  Answer: The values a and x and the results of f1 and f2 functions.
  4. How many times is "f1" called?
  Answer: 2 times
  5. How many times is "f2" called?
  Answer: 3 times
  6. What value does the "a" parameter take in the first "f1" call?
  Answer: 7
  7. What is the value of the "a" outer variable when "f1" is called for the first time?
  Answer: 8
*/

let x = 2;
let a = 6;

const f1 = function (a, b) {
  return a + b;
};

const f2 = function (a, b) {
  return a + b + x;
};

console.log(x);
console.log(a);
//console.log(b);

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



/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
  // This program throws the error for b. It returns it undefined because it is being console logged and the variable b is not declared.
  2. Remove the line that throws the error.
  3. What is printed to the console?
  // The values 2, 6, 4, 9, 6,13 and 8 respectively. The first two are console logged and the rest are computed through the function calls.
  4. How many times is "f1" called?
  // Function f1 is called twice
  5. How many times is "f2" called?
  //f2 is called three times
  6. What value does the "a" parameter take in the first "f1" call?
  // The a parameter should take the value of 1.
  7. What is the value of the "a" outer variable when "f1" is called for the first time?
  //The "a" outer variable value should be 8.
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

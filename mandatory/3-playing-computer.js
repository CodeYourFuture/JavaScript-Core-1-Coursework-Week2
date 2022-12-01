/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it). // b hasn't been declare
  2. Remove the line that throws the error. console.log(b);
  3. What is printed to the console? 2, 6, 4, 9, 6, 13, 8
  4. How many times is "f1" called? 3 times
  5. How many times is "f2" called? 2 times
  6. What value does the "a" parameter take in the first "f1" call? 9
  7. What is the value of the "a" outer variable when "f1" is called for the first time? 1
*/

let x = 2; //Global declaration
let a = 6; //Global declaration

const f1 = function (a, b) {
  return a + b;
};

const f2 = function (a, b) {
  return a + b + x;
};

console.log(x);
console.log(a);
<<<<<<< HEAD
//console.log(b);
=======
>>>>>>> 8a8564fefa1deece60b24d5b10fa131be32d8a80

for (let i = 0; i < 5; ++i) {
  a = a + 1;
  if (i % 2 === 0) {
    const d = f2(i, x); //3 times called
    console.log(d);
  } else {
    const e = f1(i, a); //2 times called
    console.log(e);
  }
}

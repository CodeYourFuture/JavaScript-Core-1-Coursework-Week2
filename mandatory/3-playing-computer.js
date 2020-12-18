/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
  2. Remove the line that throws the error.
  3. What is printed to the console? 2, 6
  4. How many times is "f1" called? 1
  5. How many times is "f2" called? 1
  6. What value does the "a" parameter take in the first "f1" call? 6
  7. What is the value of the "a" outer variable when "f1" is called for the first time? 6
*/

let x = 2;
let a = 6;
/*
// const should be used to define a variable not a function.
const f1 = function (a, b) {
  return a + b; //
}; //  The name of the function is not stated. And b is not defined.

const f2 = function (a, b) {
  return a + b + x;
}; // this function has 2 parameters not 3.
*/

console.log(x); // prints 2
console.log(a); // prints 6
//console.log(b); // b is not defined
/*
for (let i = 0; i < 5; ++i) {
  a = a + 1;
  if (i % 2 === 0) {
     const d = f2(i, x);
     console.log(d);
   } else {
     const e = f1(i, a);
     console.log(e);
   }
} */ //This loop will throw error

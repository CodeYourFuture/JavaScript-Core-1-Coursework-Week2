/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
  2. Remove the line that throws the error.
  3. What is printed to the console? //"these are printed" 2, 6, 4, 9, 6, 13,8
  4. How many times is "f1" called? // once because f1 has been assigned to  e
  5. How many times is "f2" called? // once because f2 had been assigne to d
  6. What value does the "a" parameter take in the first "f1" call? // "i" was the parameter
  7. What is the value of the "a" outer variable when "f1" is called for the first time? // 2 and 6
   
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
// console.log(b);

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

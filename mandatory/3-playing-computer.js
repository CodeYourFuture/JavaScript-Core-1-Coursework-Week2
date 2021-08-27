/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
  --because variable b is not assigned any value. 
  --> I learned that b is not defined which may be the same as not being assigned.
  2. Remove the line that throws the error.
  3. What is printed to the console?
  -- 2, 6, b is printed.
  4. How many times is "f1" called?
  --f1 is called twice, for i ===1 and i === 3
  5. How many times is "f2" called?
  -- f2 is called 3 times, for i=== 0, i === 2 and i ===4.
  6. What value does the "a" parameter take in the first "f1" call?
  -- a takes the value of 6 in the first "f1" call.
  --> I now understand that the "a" parameter takes the value of 1 in the first "f1 call"
  7. What is the value of the "a" outer variable when "f1" is called for the first time?
  -- a is 6.
  --> I now understands that the value of a is 8

  out put from functions would be

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

/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
    Console.log on line 46 is giving a errob because b is not defined.
  2. Remove the line that throws the error.
    I've commented
  3. What is printed to the console?
    2
    6
    4
    9
    6
    13
    8
  4. How many times is "f1" called?
    2
  5. How many times is "f2" called?
    3
  6. What value does the "a" parameter take in the first "f1" call?
    i
  7. What is the value of the "a" outer variable when "f1" is called for the first time?
    1
*/

let x = 2;
let a = 6;

const f1 = function (a, b) {
  console.log(a,'f1   a')
  return a + b;
};

const f2 = function (a, b) {
  console.log('f2')
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

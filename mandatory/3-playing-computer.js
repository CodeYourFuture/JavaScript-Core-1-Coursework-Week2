/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
  2. Remove the line that throws the error. // console.log(b);
  3. What is printed to the console?  // see below
  4. How many times is "f1" called? //2 times
  5. How many times is "f2" called?//3 times
  6. What value does the "a" parameter take in the first "f1" call? 7
  7. What is the value of the "a" outer variable when "f1" is called for the first time? 7
*/

let x = 2;
let a = 6;

const f1 = function (a, b) {
  return a + b;
};

const f2 = function (a, b) {
  return a + b + x;
};

console.log(x); //expected 2
console.log(a); //expected 6
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

//round1 i0 f2 a7 d4 round2 i1 f1 a8 e9 round3 i2 f2 a9 i2x2 d=6 round4 i3 f1 a10 e13
// round5 i4 f2 a11 d8 round6 i5 kicks out

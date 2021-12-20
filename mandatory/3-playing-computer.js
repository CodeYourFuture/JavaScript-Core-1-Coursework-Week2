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

console.log(x); //2
console.log(a); //6

for (let i = 0; i < 5; ++i) {
  //i === 0 1 2 3 4
  a = a + 1; // a === 7 8 9 10 11
  if (i % 2 === 0) {
    // i === 0 2 4
    const d = f2(i, x);
    console.log(d); // 4 6 8
  } else {
    const e = f1(i, a); // i === 1 3
    console.log(e); // 9 13
  }
}
//2 --- x
//6 --- a
//4 --- d
//1+8=9 --- e
//2+2+2 =6 --- d
//3+10==13 --- e
//4+2+2==8 --- d

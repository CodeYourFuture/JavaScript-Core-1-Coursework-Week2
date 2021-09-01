/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
    b is a local variable, it won't be available outside of the function.
  2. Remove the line that throws the error.
    console.log(b);
  3. What is printed to the console?
    2 (because console.log(x))
    6 (because console.log(a))
    4 (d for i=a)
    9 (e for i=1)
    6 (d for i=2)
    13 (e for i=3)
    8 (d for i=4)
  4. How many times is "f1" called?
    2 times.
  5. How many times is "f2" called?
    3 times.
  6. What value does the "a" parameter take in the first "f1" call?
    1 (because the value of i is the "a" parameter when the f1 first called)
  7. What is the value of the "a" outer variable when "f1" is called for the first time?
    8
    i = 0, a = 7
    f2 = 4
    i = 1, a = 8
    f1 = 9
    i = 2, a = 9
    f2 = 6
    i = 3, a = 10
    f1 = 13
    i = 4, a = 11
    f2 = 8
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
  a = a + 1;                  // a = 7, 9, 11
  if (i % 2 === 0) {          // i = 0, 2, 4
    const d = f2(i, x);       // d = 4, 6, 8
    console.log(d);           
  } else {                    // a = 8, 10
    const e = f1(i, a);       // i = 1, 3
    console.log(e);           // e = 9, 13
  }
}

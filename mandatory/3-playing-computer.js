/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
  //console.log(b) causing the issue
  2. Remove the line that throws the error.
  //remove the console.log(b)
  3. What is printed to the console?
2
mandatory/3-playing-computer.js:31
6
mandatory/3-playing-computer.js:32
4
mandatory/3-playing-computer.js:39
9
mandatory/3-playing-computer.js:42
6
mandatory/3-playing-computer.js:39
13
mandatory/3-playing-computer.js:42
8

  4. How many times is "f1" called?
  I think 10 times
  5. How many times is "f2" called?
  I think 2 times
  6. What value does the "a" parameter take in the first "f1" call?
  value a takes is 9, found by using console.log before a
  7. What is the value of the "a" outer variable when "f1" is called for the first time?
  value is 10 just used console.log after a

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
  //console.log("before", a)
  a = a + 1;
  //console.log("after", a)
  if (i % 2 === 0) {
    const d = f2(i, x);
    console.log(d);
  } else {
    const e = f1(i, a);
    //console.log("find", a)
    console.log(e);
  }
}

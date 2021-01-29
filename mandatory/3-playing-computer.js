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
  //b is undefined 
  return a + b;
}

const f2 = function (a, b) {
  //b is undefined and adds x to the sum of a and b
  return a + b + x;
}

console.log(x);
console.log(a);
console.log(b);

for (let i = 0; i < 5; ++i) {
  a = a + 1;
  //a becomes 7
  if (i % 2 === 0) {
    //this is going to call the function f2, 3 times, when i === 0 && i === 2 && i ===4 
    const d = f2(i, x);
    console.log(d);
  } else {
    // this is going to call the function f1, 2 times, when i === 1 && i ===3
    const e = f1(i, a);
    console.log(e);
  }
}
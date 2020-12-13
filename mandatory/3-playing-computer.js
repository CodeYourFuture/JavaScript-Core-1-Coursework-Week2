/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
  2. Remove the line that throws the error.
    I added line 28
  3. What is printed to the console?
    lines 40/41/42 values of x/a/b
    lines 49/52 values of const d/e
    lines 57/58 calculators of f1 and f2 calls :S
  4. How many times is "f1" called? 
        2
  5. How many times is "f2" called? 
      3
  6. What value does the "a" parameter take in the first "f1" call?  
        8
  7. What is the value of the "a" outer variable when "f1" is called for the first time? 
        Do you mean by this, what is value of "a" after processing it in f1? If yes, it is: 9, because i that time is 1
*/

let x = 2;
let a = 6;
let b = 345678;

let  calcF1 = 0;
let  calcF2 = 0;

const f1 = function (num1, num2) {
  console.log(`value of a ${num2} at entry number: ${calcF1}`);
  calcF1 ++
  return num1 + num2;
};

const f2 = function (num1, num2) {
  calcF2 ++
  return num1 + num2 + x;
};

console.log("value x " + x);
console.log("value a " +  a);
console.log("value b " + b);

for (let i = 0; i < 5; ++i) {
  
  a = a + 1;
  if (i % 2 === 0) {
    const d = f2(i, x);
    console.log("const d: " + d);
  } else {
    const e = f1(i, a);
    console.log("const e: " + e);
  }
}

console.log("f1: " + calcF1);
console.log("f1: " + calcF2);
console.log("value x " + x);
console.log("value a " +  a);
console.log("value b " + b);
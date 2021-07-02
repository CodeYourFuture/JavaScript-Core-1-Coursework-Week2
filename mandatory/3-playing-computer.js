/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
      Answer: Because in this program 'b' is not declared as a variable but used in code.
  2. Remove the line that throws the error.
      Answer: commented out console.log(b).
  3. What is printed to the console?
      Answer: 2, 6, 4, 9, 6, 13, 8
  4. How many times is "f1" called?
      Answer: 2times at odd values, i=1 and i=3
  5. How many times is "f2" called?
      Answer: 3times at even values, i=0 and i=2 and i=4 
  6. What value does the "a" parameter take in the first "f1" call?
      Answer: 1, because 'i' used as an argument for 'a' parameter in f1 function.
  7. What is the value of the "a" outer variable when "f1" is called for the first time?
      Answer: 8, because when i=1, f1 called and it has increased for i=0  to 7. so when second time loop runs, it is 7+1 = 8.  
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

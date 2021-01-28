/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
The error appears because the variable 'b' is not defined
  2. Remove the line that throws the error.
Done (please, see below)
  3. What is printed to the console?
Before the loop: 2, 6
After the loop: 4 (f2), 9 (f1), 6 (f2), 13 (f1), 8 (f2)
  4. How many times is "f1" called?
Twice
  5. How many times is "f2" called?
Three times
  6. What value does the "a" parameter take in the first "f1" call? 
'a' is 8 on the first f1 call
  7. What is the value of the "a" outer variable when "f1" is called for the first time?
'a' is 10 on the second f2 call

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
  a = a + 1; // I didn't realise for a while, but finally I noticed 'a' is getting updated every time you go through the loop
  if (i % 2 === 0) {
    const d = f2(i, x);
    console.log(d); //
  } else {
    const e = f1(i, a);
    console.log(e);
  }
}

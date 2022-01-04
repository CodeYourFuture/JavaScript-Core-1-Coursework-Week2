/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
  2. Remove the line that throws the error. removed console.log(b)
  3. What is printed to the console?
  4. How many times is "f1" called?   it is called 2 times
  5. How many times is "f2" called?  it is called 3 times
  6. What value does the "a" parameter take in the first "f1" call?  a is 7 in the first call  
  7. What is the value of the "a" outer variable when "f1" is called for the first time? 6?
*/

let x = 2;
let a = 6;

const f1 = function (a, b) {
  return a + b;                     
};

const f2 = function (a, b) {
  return a + b + x;              
};

console.log(x);   /* it will output 2 */
console.log(a);   /* outputs 6 */

for (let i = 0; i < 5; ++i) {
  a = a + 1;
  if (i % 2 === 0) {
    const d = f2(i, x);
    console.log(d);  /* outputs 4 in first call, 6 in the second, 8 in the third*/ 
  } else {
    const e = f1(i, a);
    console.log(e);    /* outputs 8, then 11 */
  }
}

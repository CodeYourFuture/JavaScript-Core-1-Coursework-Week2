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
// f1 is fine, all place holders used

const f2 = function (a, b) {
  return a + b + x;
};

//expext f2 to return the sum of the place holders and x which equlas 2
console.log(x);
console.log(a);
console.log(b);
// expect cosole.log b to retrun undefined

for (let i = 0; i < 5; ++i) {
  //++i means i is increased first befor it is evalusted? i starts at 1
  // insteas of zero?
  a = a + 1;
  // a now = 7
  if (i % 2 === 0) {
    //if i is even
    const d = f2(i, x);
    // d = 7 + (2||4) + 2;
    console.log(d);
    // d = 11 || 13
  } else {
    const e = f1(i, a);
    // e = (1||3) + 7;
    console.log(e);
    // e = 8 || 10;
  }
}

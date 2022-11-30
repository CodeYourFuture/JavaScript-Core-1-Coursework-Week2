/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
  - b is a parameter so is undeclared
  2. Remove the line that throws the error.
  3. What is printed to the console?
  x = 2 and a = 6, d = 4 and then 6 and e = 9 and then 13
  4. How many times is "f1" called? twice
  5. How many times is "f2" called? three times
  6. What value does the "a" parameter take in the first "f1" call? 7
  7. What is the value of the "a" outer variable when "f1" is called for the first time? 7
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
//console.log(b);
// expect cosole.log b to retrun undefined

for (let i = 0; i < 5; ++i) {
  //++i means when evalueated the value of i is returned after it has been increamented,
  // i starts at 1
  // insteas of zero?
  //console.log(`i am ${i} at iteration ${i + 1}`);
  a = a + 1;
  //console.log(`a = ${a} at iteration ${i + 1}`);
  // a now = 7
  if (i % 2 === 0) {
    //if i is even
    const d = f2(i, x);
    // d = (i = 0||2||4||) + (b = x = 2) + (x = 2);
    console.log(d);
    // d = 4 || 6 || 8
  } else {
    const e = f1(i, a);
    // e = (1||3) + (a =7miss i=0/ a = 8 i=1|| 9miss i=2/ 10 i =3 || 11miss i=4);
    console.log(e);
    // e = 9 || 11;
  }
}

//console.log(`i am the final value of a ${a}`);

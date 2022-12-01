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

//1. ASSUMPTION: the error is related to the 'b' variable which is not declared
//2. removed, as expected 'b' was not declared
//3. only what is console.logged:x,a,d=4, all are explained below
//4. f1 is called twice
//5. f2 is called 3 times
//6. a=8
//7. a=8(i might be wrong)
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
//Iteration1: i=0, a=7,d=4,f2 called
//Iteration2: i=1,a=8, e=9, f1 called
//Iteration3: i=2, a=9, d=6, f2 called the 2nd time
//Iteration4: i=3, a=10, e=13, f1 called the 2nd time
//Iteration5: i=4, a=11, d=8, f2 called the 3rd time
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

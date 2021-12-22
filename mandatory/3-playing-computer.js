/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
    The parameter declared as **b** in f1 and f2 functions is not defined before it's 
    expected in the console.log method on line 52.

  2. Remove the line that throws the error.
    This in the console.log method on line 52 as identified earlier.

  3. What is printed to the console?
    2 // x
    6 // a
    4 // f2
    9 // f1
    6 // f2
    13 // f1
    8 // f2

  4. How many times is "f1" called?
    2 times - It gets called every time we have a odd number. So, one for 9 and one for 13.

  5. How many times is "f2" called?
    3 times - It gets called every time we have a even number. So, one for 8 and one for 10.

  6. What value does the "a" parameter take in the first "f1" call?
    The value of the parameter is 1.

  7. What is the value of the "a" outer variable when "f1" is called for the first time?
    The value is 8. a is incremented by 1 on each iteration. f1 gets called on 
    the second iteration. 
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


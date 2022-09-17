/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
 because in line 35 b is not defined

  2. Remove the line that throws the error.
remove  console.log(b);

  3. What is printed to the console?
numbers
  
  4. How many times is "f1" called?
  2 times

  5. How many times is "f2" called?
  3 times

  6. What value does the "a" parameter take in the first "f1" call?
first call f1 function in for loop total: 9 i: 1 a: 8
second call f1 function in for loop total: 13 i: 3 a: 10

  7. What is the value of the "a" outer variable when "f1" is called for the first time?
  the value is 6
*/

let x = 2;
let a = 6;

const f1 = function(a, b) {
    return a + b;
};

const f2 = function(a, b) {
    return a + b + x;
};

console.log(x);
console.log("outer a:", a);
// console.log(b);

for (let i = 0; i < 5; ++i) {
    a = a + 1;
    if (i % 2 === 0) {
        const d = f2(i, x);
        console.log(d);
    } else {
        const e = f1(i, a);
        console.log(
            "first call f1 function in for loop",
            "total:",
            e,
            "i:",
            i,
            "a:",
            a
        );
    }
}
/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
  2. Remove the line that throws the error. console.log(b); // b is not defined its local variabels in function scoop;
  3. What is printed to the console? 6 and 2
  4. How many times is "f1" called? f1 function will be call when the i is odd number (1,3) so it will be exicuted 2 times
  5. How many times is "f2" called? f2 function will be call when the i is even number (0,2,4) so it will be exicuted 3 times
  6. What value does the "a" parameter take in the first "f1" call? the first call f1 when i=1 & a=8
  7. What is the value of the "a" outer variable when "f1" is called for the first time? a do not change  
*/

let x = 2;
let a = 6;

const f1 = function (a, b) {
  return a + b;
};

const f2 = function (a, b) {
  return a + b + x;
};

console.log(x); // x=2
console.log(a); // a=6
//console.log(b); // b is not defined its local variabels in function scoop;

for (let i = 0; i < 5; ++i) {
  a = a + 1;
  if (i % 2 === 0) {
    const d = f2(i, x); // f2 function will be call when the i is even number (0,2,4) so it will be exicuted 3 times
    console.log(d);
  } else {
    // the first call f1 when i=1 & a=8 
    const e = f1(i, a); // f1 function will be call when the i is odd number (1,3) so it will be exicuted 2 times
    console.log(e);
  }
}

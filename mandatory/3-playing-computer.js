/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
    [ console.log(b) throws error as b is undefined]
  2. Remove the line that throws the error. 
    [commented out the line causing errors]
  3. What is printed to the console?
    [2, 6, 6, 4, 7, 9, 8, 6, 9, 13, 10, 8]
  4. How many times is "f1" called?
    [10 times, used console.log("find", a)]
  5. How many times is "f2" called?
    [2 times, used console.log("search", x)]
  6. What value does the "a" parameter take in the first "f1" call?
    [value a = 9, used console.log("before", a)]
  7. What is the value of the "a" outer variable when "f1" is called for the first time?
    [value a = 10, used console.log("after", a)]
*/

let x = 2;
let a = 6;

const f1 = function (a, b) {
  return a + b; 
};

const f2 = function (a, b) {
  return a + b + x;
};

console.log(x); // output is 2
console.log(a); // output is 6
// console.log(b); // b is undefined [Ans 1 and 2]

for (let i = 0; i < 5; ++i) {
  //console.log("before", a) 
  a = a + 1;
  //console.log("after", a) 
  if (i % 2 === 0) {
    const d = f2(i, x);
    //console.log("search", x); 
    console.log(d);
  } else {
    const e = f1(i, a);
    //console.log("find", a); 
    console.log(e);
  }
}
/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
  // Because b in console.log(b) is not defined, it is a parameter (local variable) in f1 and f2 functions, which means it cannot be reached globally, we can only access it inside the f1 and f2 functions
  2. Remove the line that throws the error.
  // console.log(b) under console.log(a) commented out
  3. What is printed to the console?
  4. How many times is "f1" called?
  // f1 function will be called three times: explained in for loop inside if 
  5. How many times is "f2" called?
  // f2 function will be called two times: explained in for loop inside else 
  6. What value does the "a" parameter take in the first "f1" call?
  // f1 will be called 2 times with 1 and 3 i values, f1(1, 8) and f1(3, 10) will be called, a will take 8 in the first call
  7. What is the value of the "a" outer variable when "f1" is called for the first time?
  // 8
*/

let x = 2;
let a = 6;

const f1 = function (a, b) {
  return a + b; 
};

const f2 = function (a, b) {
  return a + b + x;
};

console.log(x); // This will log 2 to the console because x is a global variable that stores 2
console.log(a); // This will log 6 to the console because a is a global variable that stores 6
// console.log(b); // This will throw an error because b is not defined, it is a parameter, not a a global variable 

for (let i = 0; i < 5; ++i) { // i values in for loop: 0, 1, 2, 3, 4
  a = a + 1;
  if (i % 2 === 0) { // if i is an even number, run the code inside {} below
    const d = f2(i, x); // since i values 0, 2, 4 are even numbers, f2 will be called three times
    console.log(d);
  } else { // if i is an odd number, run the code inside {} below
    const e = f1(i, a); // f1 will be called 2 times with 1 and 3 i values, f1(1, 8) and f1(3, 10) will be called
    // console.log(a); //8 for the first time it a will be 8
    console.log(e); //9
  }
}


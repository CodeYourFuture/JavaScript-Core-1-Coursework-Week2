/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
  // This program throws an error because 'b' in console.log(b) at line 38 is not defined or declared as a variable.
  2. Remove the line that throws the error.
  // I have commented out line 38 which prints 'b'.  
  3. What is printed to the console?
  // 2 , 6 , 4 , 9 , 6 , 13 , 8
  4. How many times is "f1" called?
  // "f1" will be called 2 times because 'i' cycles from 1 to 4 as such 'i' will have an odd value twice (1 and 3). 
  5. How many times is "f2" called?
  // "f2" will be called 3 times because 'i' cycles from 1 to 4 as such 'i' will have an even value twice (0 ,2 and 4).
  6. What value does the "a" parameter take in the first "f1" call?
  // 1 because 'i' is being used as the 'a' parameter.
  7. What is the value of the "a" outer variable when "f1" is called for the first time?
  // Value of 'a' is 8 the first time it is called.  
*/

let x = 2;
let a = 6;

const f1 = function (a, b) {
  return a + b;
};

const f2 = function (a, b) {
  return a + b + x;
};

console.log(x); // This will print '2' in terminal because x is a global variable that has been assigned a value of 2 at line 25.
console.log(a); // This will print '6' in terminal because a is a global variable that has been assigned a value of 6 at line 26.
/* console.log(b); This will result in an error because 'b' is not defined or declared as a variable. It is just a parameter in the f1 and f2 function. */

/* In the for loop '++i' will increment the value of 'i' by 1 before using it in the statement. */

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

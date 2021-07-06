/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).

  B has not been defined, only a and x 

  2. Remove the line that throws the error.

  Removed console.log(b)

  3. What is printed to the console?

  2 
  6
  4
  9
  6

  4. How many times is "f1" called?

  2

  5. How many times is "f2" called?

  3

  6. What value does the "a" parameter take in the first "f1" call?

  7


  7. What is the value of the "a" outer variable when "f1" is called for the first time?

  7

  
*/

let globalX = 2;
// Every time the for loop runs, it adds 1 to this value (globalA) 
let GlobalA = 6;

const f1 = function (localA, localB) {
  return localA + localB;
};

const f2 = function (localA, localB) {
  return localA + localB + globalX;
};

console.log(globalX);
console.log(GlobalA);

// i = 0 , a =6 , x=2 -> i=0,a=7,x=2 -> i is even therefore 0 + 2 + 2 = 4
// i = 1 , a =7 , x=2 -> i=1,a=8,x=2 -> i is odd therefore 1 + 7  = 8
// i = 2 , a =8 , x=2 -> i=2,a=9,x=2 -> i is even therefore 0 + 2 + 2 = 4
// i = 3 , a =9 , x=2 -> i=3,a=10,x=2 -> i is odd therefore 1 + 7  = 13

for (let i = 0; i < 5; ++i) {
  GlobalA = GlobalA + 1;
  if (i % 2 === 0) {
    const d = f2(i, globalX);
    console.log(d);
  } else {
    const e = f1(i, GlobalA);
    console.log(e);
  }
}

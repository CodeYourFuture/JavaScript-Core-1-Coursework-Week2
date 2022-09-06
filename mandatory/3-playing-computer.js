/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).

  // b is never defined

  2. Remove the line that throws the error.

  // onsole.log(b) -- commented out

  3. What is printed to the console?

  // 2, 6, 4, 9, 6, 13, 8
  // the first two console logs are from just printing x and a, the last 5 are from the for loop (if/else blocks)

  4. How many times is "f1" called?

  // 2 times, because i is odd 2 times during the for loop sequence, 0, 1, 2, 3, 4

  5. How many times is "f2" called?

  // 3 times, because i is even 3 times during the for loop sequence 0, 1, 2, 3, 4

  6. What value does the "a" parameter take in the first "f1" call?

  // 8 - because the for loop has looped twice before the f1 function is called, and therefore a = 6 was incremented (+1) twice before that point.

  7. What is the value of the "a" outer variable when "f1" is called for the first time?

  // 8 - because it is coming from the globally scoped "a" variable, which as above, has been incremented (+1) twice by the for loop before the f1 function is called for the first time.

*/

let x = 2;
// globally scoped
let a = 6;
// globally scoped

const f1 = function (a, b) {
  return a + b;
};

const f2 = function (a, b) {
  return a + b + x;
};

console.log(x); // 2
console.log(a); // 6
// console.log(b); // undefined

for (let i = 0; i < 5; ++i) {
  // (++i is PRE Increment, i++ is POST INCREMENT)
  // this for loop runs 5 times
  // each loop, i = 0 / 1 / 2 / 3 / 4
  // console.log(`i: ${i}`) 
  a = a + 1;
  // each loop, a = 7 / 8 / 9 / 10 / 11
  // console.log(`a: ${a}`) 
  if (i % 2 === 0) {
    // this if statement runs 3 times
    // loop1 i = 0, loop3 i = 2, loop5 = 4
    const d = f2(i, x);
    // loop 1 d = (i = 0) + (x = 2) + (x = 2) = 4;
    // loop 3 d = (i = 2) + (x = 2) + (x = 2) = 6;
    // loop 5 d = (i = 4) + (x = 2) + (x = 2) = 8;
    console.log(d);
    // logged: 4, 6, 8
  } else {
    // this else statement runs 2 times
    // loop2 i = 1, loop4 i = 3
    const e = f1(i, a);
    // loop2 e = (i = 1) + (a = 8) = 9;
    // loop4 e = (i = 3) + (a = 10) = 13;
    console.log(e);
    // logged: 9, 13
  }
  // so the console.log will be:
  // 2 (x from before the for loop)
  // 6 (a from before the for loop)
  // loop 1 = 4
  // loop 2 = 9
  // loop 3 = 6
  // loop 4 = 13
  // loop 5 = 8
}

/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
  2. Remove the line that throws the error.
  3. What is printed to the console? a) These numbers are printed 2 6 4 9 6 13 8
  4. How many times is "f1" called? a) F1 is called twice.
  5. How many times is "f2" called? a) F2 is called twice.
  6. What value does the "a" parameter take in the first "f1" call? a) it takes in 6.
  7. What is the value of the "a" outer variable when "f1" is called for the first time? 7.
*/

let x = 2;
let a = 6;

const f1 = function (a, b) {
  return a + b;
}

const f2 = function (a, b) {
  return a + b + x;
}

console.log(x);
console.log(a);


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

// solutions:
// let x = 2;
// let a = 6;

// const f1 = function (a, b) {
//   return a + b;
// };

// const f2 = function (a, b) {
//   return a + b + x;
// };

// console.log(x);
// console.log(a);
// console.log(b);

// for (let i = 0; i < 5; ++i) {
//   a = a + 1;
//   if (i % 2 === 0) {
//     const d = f2(i, x);
//     console.log(d);
//   } else {
//     const e = f1(i, a);
//     console.log(e);
//   }
// }
// Answers
// This program throws an error. Why? (If you can't find it, try executing it). When the code above is executed then the following error is thrown:
// ReferenceError: b is not defined
// This error is telling us that Node has tried to access the variable b but no such variable exists at this point in the program. In other words, we're trying to access a variable that has not yet been declared in the code.

 

// Remove the line that throws the error.
// let x = 2;
// let a = 6;

// const f1 = function (a, b) {
//   return a + b;
// };

// const f2 = function (a, b) {
//   return a + b + x;
// };

// console.log(x);
// console.log(a);
// // <-- we've deleted the line containing console.log(b);

// for (let i = 0; i < 5; ++i) {
//   a = a + 1;
//   if (i % 2 === 0) {
//     const d = f2(i, x);
//     console.log(d);
//   } else {
//     const e = f1(i, a);
//     console.log(e);
//   }
// }
// The deleted line is indicated on the code above. We delete the line with console.log(b);

 

// What is printed to the console?
// The following is printed to the console:

// 2
// 6
// 4
// 9
// 6
// 13
// 8
 

// How many times is "f1" called ?
// We can work out the number of times f1 is called by looking at the if statement inside the for loop:

// if (i % 2 === 0) {
//   const d = f2(i, x);
//   console.log(d);
// } else {
//   const e = f1(i, a);
//   console.log(e);
// }
// According to this if statement, we only enter the else block when i % 2 === 0 evaluates to false ( in other words, when i is odd )

// The for loop is initialised with i = 0 and goes through to i = 4.

// Therefore f1 will only be called when i is 1 or 3 ( the only odd numbers between 0 and 4).

// So f1 must be called twice.

// We could also check our answer to this question by adding a console.log into the f1 function:

// const f1 = function (a, b) {
//   console.log('The value of a is ', a);
//   console.log('f1 is called!');
//   return a + b;
// };
// We could then count the number of times we see "f1 is called" in the console.

 

// How many times is "f2" called ?
// Following similar reasoning to the previous question, we can work out that f2 must be called 3 times.

 

// What value does the "a" parameter take in the first "f1" call ?
// Declaration of f1
// const f1 = function (a, b) {
//   return a + b;
// };
// We can see from the creation of f1 that its first parameter is a. Therefore whenever f1 is called, its first argument will be assigned to the first parameter a. Let's look at where f1 is called:

// Call site for f1
// } else {
//   const e = f1(i, a);
//   console.log(e);
// }
// f1 is called when i is either 1 or 3.

// Therefore, the first time f1 is called i must be equal to 1.

// So f1's first argument is 1 and therefore inside the function f1, a will be assigned a value of 1

 

// What is the value of the "a" outer variable when "f1" is called for the first time ?
// The outer variable a is initialised with a value of 6.

// This value is then incremented by 1 for each iteration of the for loop.

// Therefore, just before we call f1 for the first time then i must have a value of 1: therefore a will have been incremented by 1 twice already. Therefore a will have a value of 8.
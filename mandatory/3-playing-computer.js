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
/* 
Answers:

1. There will be an error here because b is not defined
2. I removed the line: console.log(b);
3. 2   -  console.log(x)
   6   -   console.log(a)
   4   -  when i = 0, using f2(i,x): a = 7 and x = 2 so i + x + x = 0 + 2 + 2 = 4
   9   -  when i = 1, using f1(i,a): a = 8 and x = 2 so i + a = 1 + 8 = 9
   6   -  when i = 2, using f2(i,x): a = 9 and x = 2 so i + x + x = 2 + 2 + 2 = 6
   13  -  when i = 3, using f1(i,a): a = 10 and x = 2 so i + a = 3 + 10 = 13
   8   -  when i = 4, using f2(i,x): a = 11 and x = 2 so i + x + x = 4 + 2 + 2 = 8
4. f1 is called 2 times
5. f2 is called 3 times
6. In the first f1 call a is 8
7. [The first value of the a outer variable when f1 is called for the first time is 8
*/

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

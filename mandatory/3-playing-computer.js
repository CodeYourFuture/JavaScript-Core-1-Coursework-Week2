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


Answers

1. b is not declared.
2. comment out console.log(b)
3. console.log(x) // output 2
   console.log(a) // output 6
4. f1 is called two times
 
    first time 
    i = 1 because 1 % 2 = 1
    and x = 2;

    1 + 2 + 2 = 5,
    ---------------
    second time 
    i = 3 because 3 % 2 = 1
    3 + 2 + 2 = 7
5. f2 is called three times
   first time 
    i = 0 because 0 % 2 = 0
    and x = 2;

    0 + 2 + 2 = 4,
    ---------------

    second time 
    i = 2 because 2 % 2 = 0
    and x = 2;

    2 + 2 + 2 = 6,
    ---------------
    third time 
    i = 4 because 4 % 2 = 0
    4 + 2 + 2 = 8
*/

let x = 2;
let a = 6;

const f1 = function (a, b) {
  return a + b;
};

const f2 = function (a, b) {
  return a + b + x;
};

console.log(x,' just x');
console.log(a, 'just a');
// console.log(b);

for (let i = 0; i < 5; i++) {
  a = a + 1;
  if (i % 2 === 0) {
    const d = f2(i, x);
    console.log(d, "f2");
  } else {
    const e = f1(i, a);
    console.log(e, 'f1');
  }
}

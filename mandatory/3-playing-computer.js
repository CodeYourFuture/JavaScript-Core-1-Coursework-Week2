/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
  2. Remove the line that throws the error.
  3. What is printed to the console?
  printed to the console is: 
  2
  6
  4
  9
  6
  13
  8

  4. How many times is "f1" called?
  four times.

  5. How many times is "f2" called?
  four times.

  6. What value does the "a" parameter take in the first "f1" call?
  the value of a inside the first f1 function call is 7.

  7. What is the value of the "a" outer variable when "f1" is called for the first time?
  I believe it is still 7 but I may be wrong as I'm getting a little confused between 'calling'
  and 'declaring' a variable.
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
//ERROR:
// console.log(b);
// after running the program this is the error - This is because
//'b' is only defined inside functions as a local variable - so it can not be called
//here, outside of the function(s)


//at first glance without running the code I can only spot this one error:
for (let i = 0; i < 5; ++i) { //shouldn't it be i++ ??
  a = a + 1;
  if (i % 2 === 0) {
    const d = f2(i, x);
    console.log(d);
  } else {
    const e = f1(i, a);
    console.log(e);
  }
}

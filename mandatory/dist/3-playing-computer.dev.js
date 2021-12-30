"use strict";

/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it). it throws an error because b is not defined when you do console.log.
  2. Remove the line that throws the error. line 31 removed.
  3. What is printed to the console? 2,6,4,9,6,13,8
  4. How many times is "f1" called? F1 calles in 2 times.
  5. How many times is "f2" called? 3times
  6. What value does the "a" parameter take in the first "f1" call? The first value f1 takes is 6+1 = 7.
  7. What is the value of the "a" outer variable when "f1" is called for the first time? Its 6.
*/
var x = 2;
var a = 6;

var f1 = function f1(a, b) {
  return a + b;
};

var f2 = function f2(a, b) {
  return a + b + x;
};

console.log(x); //2

console.log(a); //6

for (var i = 0; i < 5; ++i) {
  a = a + 1;

  if (i % 2 === 0) {
    var d = f2(i, x);
    console.log(d);
  } else {
    var e = f1(i, a);
    console.log(e);
  }
}
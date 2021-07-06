/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).  // b is undefined, so can't log it.
  2. Remove the line that throws the error. //Line 31 --> console.log(b);
  3. What is printed to the console?  // Prints values of x --> a --> loop based on even and odd conditions:
2
6
4
9
6
13
8

  4. How many times is "f1" called? // Twice (1st output is 9, 2nd is 13) 
  5. How many times is "f2" called?  // 3 times (1st output 4, 2nd is 6, 3rd is 8)
  6. What value does the "a" parameter take in the first "f1" call? //  1 as "a" takes value of i, which is a counter
  7. What is the value of the "a" outer variable when "f1" is called for the first time? Maybe 8 as it increments by 1 at each count
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
//console.log(b);

for (let i = 0; i < 5; ++i) {
  a = a + 1;  //a = 7 at count 0, increments by 1 at each count.
  if (i % 2 === 0) {    // Will execute if i is even
    const d = f2(i, x);
    console.log(d);  // d=a+b+x i.e i+x+x --> i+2+2, 1st call logs 0+2+2=4, 2nd 2+2+2=6, 3rd 4+2+2=8
  } else {            // Executes if i is odd
    const e = f1(i, a);  
    console.log(e);   // e is sum of f1's two arguments. So 1st f1 call logs i+a --> 1+8=9, 2nd logs 3+10=13 
  }
}

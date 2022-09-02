/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
  2. Remove the line that throws the error.  added b as not defined
  3. What is printed to the console? 2,6,3,4,9,6,13,8
  4. How many times is "f1" called?  0 2 4 //  3 times
  5. How many times is "f2" called?  1 and 3 // 2 times
  6. What value does the "a" parameter take in the first "f1" call?  6 ??  a = a  
  7. What is the value of the "a" outer variable when "f1" is called for the first time?
*/ //      outer  is 6  on the for loop 7  ??  a = a + 1 ???   

let x = 2;
let a = 6;
let b = 3;  //  added as b in undefined
const f1 = function (a, b) {
  return a + b;  //  6 + 3 = 9;
};

const f2 = function (a, b) {
  return a + b + x;  // 6 + 3 + 2 =  11
};

//console.log(x); // 2
//console.log(a); // 6
//console.log(b); //  b is set as 3

for (let i = 0; i < 5; ++i) {
  a = a + 1;   //  6 + 1 = 7
  if (i % 2 === 0) {  //  if  i = even  // 0 2 4
    const d = f2(i, x); // d =  i + 2  // 0 = 0 + 2 + 2 = 4 //  2 + 2 + 2 = 6 // 4 + 2+ 2 =8
    console.log(d);
  } else {  // is i = odd   //  1 3 
    const e = f1(i, a); // i +  6   //   6 + 3 = 9 //  a + b   //  3 +  7 + 3 = 13 // i + a + b
    console.log(e);
  }
}

/*for (let i = 0; i < 5; ++i) {
  console.log(i);  //  0,1,2,3,4
} */
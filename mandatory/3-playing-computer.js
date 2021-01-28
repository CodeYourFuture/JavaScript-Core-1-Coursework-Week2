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

//*ANSWERS*//
/*
1. b was causing error because we were consoling it while we did not assign value to it.
2. console.log(b);
3. It print 4, 9, 6, 13, 8 AND 2,6 before for loop
4. It called two times which result printing 9, 13.
5. It called three times which result printing 4, 6, 8.
6. value of a is 8 and plus i which is one result nine.
7.Result of a = a + 1 is 7  

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
   a = a + 1;
  //If result is zero then console log even numbers
 if (i % 2 === 0) {
    const d = f2(i, x);
    console.log(d);
    // otherwise console log odd number
  } else {
    
    const e = f1(i, a);
    console.log(e);
  }
}

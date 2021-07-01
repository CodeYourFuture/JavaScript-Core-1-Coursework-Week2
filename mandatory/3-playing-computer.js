/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:
       A t the start var "a" and var "x" was declare, we control the number of times by giving the starting value and the ending value by creating conditional, starting value of i ad 1 , so basically this for  loops 5 times. it increases the value of i by 1 every time it runs ad keep looping by going to the ext statments  
  1. This program throws an error. Why? (If you can't find it, try executing it).
    Answer:At the start of the line 24,  we can see let b was not declare after line 26. So when we run before we run it i can predict  that there will be an error come up with an error because var b is  declare. So console.log result will come up with output (b) an an error , because  Var b is not declare.
  2. Remove the line that throws the error.
   Answer: line 13 has been remove . See comment  on line 38 
  3. What is printed to the console?
  Answer: On console.log is going to  display two value, (x) with the value if (2) and console.log(a ) with the value of (6). 
  4. How many times is "f1" called?
  Answer: f1 will been called  2 times as it will keep going back and forth to else test the condition again
  5. How many times is "f2" called?
  Answer: f2 should be called more that f1 , f2 should be called 3 times as it goes back to tests the condition if less than or equal to 
  6. What value does the "a" parameter take in the first "f1" call?
  Answer: The starting point of i is 1 and it goes from 1 through  5, so "a" parameter goes loop around , when we run "a" parameter it will  give the output  of  8.
  7. What is the value of the "a" outer variable when "f1" is called for the first time?
  Answer: The entire for loop statement  lies between  parameter  a" as it has be declare on lies 25, so console .log will output the result of a by displaying value  9 when we run second  loop.
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
// console.log(b);

for (let i = 0; i < 5; ++i) {
  a = a + 1;
  // 1 loop add a + 1 = 7 , 2 loop will add a + 1 =8  , 3 loop a + 1 = 9 ,  3 loop a + 1 = 10, 4 loop a + 1 = 13
  if (i % 2 === 0) {
    // if its true it will continue
    const d = f2(i, x);
    // declare new variable as d and call it f2 , with 2 parameter 
    console.log(d);
    // it will call f2 calculate  line 30 , it 
  } else {
    const e = f1(i, a); //increase i every time 
    console.log(e); // total 9 
  }
}

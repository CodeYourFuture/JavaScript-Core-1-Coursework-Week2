/*
  You have to predict the output of this program WITHOUT EXECUTING IT.

  In order to do this, try writing down the value that all variables take
  during each step of the program execution.

  Answer the following questions:

  1. This program throws an error. Why? (If you can't find it, try executing it).
    yes, It has and error because we did not declared the variable b and we are trying to print with console.log(b)
  2. Remove the line that throws the error.   //we removed the console.log(b);
  3. What is printed to the console? 2 6 4 9 6 13 8
  4. How many times is "f1" called? three times
  5. How many times is "f2" called? two times
  6. What value does the "a" parameter take in the first "f1" call?
  7. What is the value of the "a" outer variable when "f1" is called for the first time? //es la variable fuera de la funcion 8
*/

let x = 2;
let a = 6;
// let b = 8;

const f1 = function (a, b) {
  console.log(`this f1 = ${a}, ${b}`);
  return a + b;
};

const f2 = function (a, b) {
  console.log(`this f2 = ${a}, ${b}`);
  return a + b + x;
};

console.log(x);
console.log(a);
// console.log(b);

for (let i = 0; i < 5; ++i) {
  a = a + 1;
  console.log(`this is a ${a}`);
  if (i % 2 === 0) {
    const d = f2(i, x);
    console.log(`this f1 loop = ${i}, ${x}`);
    console.log(d);
  }else {
    const e = f1(i, a);// i es el a dentro del f1
    console.log(`this f2 loop = ${i}, ${a}`);
    console.log(e);
  }
}

//cambiar los valores para ver como van cambiando.

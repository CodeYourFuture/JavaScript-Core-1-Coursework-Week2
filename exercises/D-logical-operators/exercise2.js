/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/


let n = -10;
function isNegative(num) {
  return num < 0;
}
  let output = isNegative(n);

  console.log(output);



let myNum = 10;
function isBetween5and10(myNum) {
  return myNum >= 5 && myNum <= 10;
}

let name = "Daniel";
function isShortName(name) {
  return name.length <= 7;
}

let hisName = "Daniel";
function startsWithD(hisName) {
  return hisName[0] === "D";
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log("Is -10 is a negative number?", isNegative(-10));

console.log("Is 5 a negative number?", isNegative(5));

console.log("Is 10 in the range 5-10?", isBetween5and10(10));
console.log("Is Daniel a short name?", isShortName("Daniel"));
console.log("Does Daniel start with 'D'?", startsWithD("Daniel"));

/* 
  EXPECTED RESULT
  ---------------
  Is -10 is a negative number? true
  Is 5 a negative number? false
  Is 10 in the range 5-10? true
  Is Daniel a short name? true
  Does Daniel start with 'D'?
*/

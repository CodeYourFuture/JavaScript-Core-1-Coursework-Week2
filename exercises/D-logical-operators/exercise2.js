/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/

// function isNegative(num) {
//   let num;
//   if(num < 0){
//     return true
//   }else{
//     return false
//   }
// }

let isNegative = (num) => num < 0;


// ------------option a----------
// function isBetween5and10 (num){
//   if(num >= 5 && num <= 10){
//     return true
//   }else{
//     return false 
//   }
// }

// ------------option b----------
// function isBetween5and10(num) {
//   return num > 4 && num < 11;
// } 


// ------------option C----------
let isBetween5and10 = (num) => num > 4 && num < 11; //this is arrow fuction, in one line we can print the result




// function isShortName (name) {
//   if(name === "Daniel"){
//     return true 
//   }
// }

let isShortName = (names) => names === 'Daniel';



// function startsWithD(str){
//   let str
//   if(str.substr(0,1) == "D"){
//     return true 
// }
let startsWithD = (str) => str.charAt(0) == "D";



/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log("Is -10 is a negative number?", isNegative(-10));
console.log("Is 5 a negative number?", isNegative(5));
console.log("Is 10 in the range 5-10?", isBetween5and10(7));
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

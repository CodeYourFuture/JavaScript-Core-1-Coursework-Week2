/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/
// This function test if the number is Negative return true if else false 
function isNegative(num) {
  return (num < 0 ) ? true :false;
}
// This function  test the number  is between the 5 and 10 return true if else return false 
function isBetween5and10(num1){
  return (num1 >= 5 && num1 <= 10 ) ? true : false ;
}
// This function test if the name is short name return true if else false 
function isShortName(name) {
for(let i =0 ; i <name.length; i++){

}
  return name.length < 10 ? true : false;
}
// This function test if the first name start with "D"
function startsWithD(name1) {
  return (name1[0]==="D") ? true : false ;
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

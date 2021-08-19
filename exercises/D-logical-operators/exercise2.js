/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/

function isNegative(n) {
  if (n < 0) {
    return true;
  }
  return false;
}
//console.log(isNegative(-10)); // logs true
//console.log(isNegative(5)); // logs false

/*Function if range is Between 5 and 10 */

function isBetween5and10(n) {
  //let the number = n
  if (n >= 5 && n <= 10) {
    return true;
  }
  return false;
}
//console.log(isBetween5and10(7)); // logs true
// console.log(isBetween5and10(4)); // logs false

/*Function for short name */
function isShortName(name) {
  let shortName = "Daniel";
  if (name.length <= shortName.length) {
    return true;
  }
  return false;
}
//console.log(isShortName("Daniel")); //logs true
// console.log(isShortName("Haseeb Khalil")); //logs false

/*Function to find the the first letter of a name */
function startsWithD(name) {
  if (name.charAt(0) === "D") {
    return true;
  }
  return "Does not start with 'D'";
}
//console.log(startsWithD("Daniel")); // logs true
//console.log(startsWithD("Haseeb")); // logs "Does not start with 'D'".

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

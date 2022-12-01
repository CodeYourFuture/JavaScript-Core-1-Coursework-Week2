/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/

function isNegative( number ) {
  if (number < 0 ){ 
    return "number is negative";
  } else {
    return "number is not negative";
  }

}

function range(number) {
  if ( 5 < number<10) {
    return range ="isBetween5and10";
  }
}

function ShortName(name) {
  if (typeof (name = number && name<5)){
    
    return ("is sort name" );
  }
}

function start(letter) {
  if (letter == "D") {
    return "this name start with D"
  }
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

/*
  Conditionals
  ---------------------------------
  Write a function that checks if a student has passed
  - if the mark is 80 or higher then the grade is "A"
  - if the mark is lower than 80 and greater than 60 then the grade is "B"
  - if the mark is 60 or lower but no lower than 50 then the grade is "C"
  - Otherwise the grade is "F"
*/

var is80orMore = "A";
var is60to80 = "B"
var is50to60 = "C"
var isLessThan50 = "F"


function calculateGrade(mark) {
  if (mark >= 80){                     //checks if mark is 80 or more
    return is80orMore         
  } else if (mark >= 60){              // checks if mark is 60 or more
    return is60to80
  } else if ( mark === 60 || mark >= 50){  // checks if mark is 50 or more
    return is50to60
  } else return isLessThan50           // returns last value
  }
  


/* 
DO NOT EDIT BELOW THIS LINE
--------------------------- */
var grade1 = 49;
var grade2 = 90;
var grade3 = 70;
var grade4 = 55;

console.log("'" + grade1 + "': " + calculateGrade(grade1));
console.log("'" + grade2 + "': " + calculateGrade(grade2));
console.log("'" + grade3 + "': " + calculateGrade(grade3));
console.log("'" + grade4 + "': " + calculateGrade(grade4));

/* 
  EXPECTED RESULT
  ---------------
  '49': F
  '90': A
  '70': B
  '55': C
  */

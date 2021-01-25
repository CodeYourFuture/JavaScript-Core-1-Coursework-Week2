/*
  Conditionals
  ---------------------------------
  Write a function that checks if a student has passed
  - if the mark is 80 or higher then the grade is "A"
  - if the mark is lower than 80 and greater than 60 then the grade is "B"
  - if the mark is 60 or lower but no lower than 50 then the grade is "C"
  - Otherwise the grade is "F"
*/

// Declaring Variables for the different grades
const is80OrMore = "A";
const lower80Higher60 = "B"
const lower60HigherEqual50 = "C"
const lessThan50 = "F"

function calculateGrade(mark) {

  // checking if the grade is 80 or more
  if (mark >= 80) {
    return is80OrMore;
  }

  // checking if the grade is less than 80 but no lower than 60
  else if (mark < 80 && mark > 60) {
    return lower80Higher60; {
    }
  }

  // checking if the grade is less than 60 but not lower than 50
  else if (mark == 60 || mark > 50) {
    return lower60HigherEqual50;
  }

  // checking if the grade is less than 50
  else {
    return lessThan50; 
  }
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

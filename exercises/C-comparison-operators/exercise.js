/*
  BOOLEAN WITH COMPARISON OPERATORS
  ---------------------------------
  Using comparison operators complete the unfinished statements.
  The variables should have values that match the expected results.
*/

let studentCount = 16;
let mentorCount = 9;
let moreStudentsThanMentors;
  if (studentCount > mentorCount) {
    moreStudentsThanMentors = true
  } else {
    moreStudentsThanMentors = false
  } // finish this statement

let roomMaxCapacity = 25;
let enoughSpaceInRoom;
  if (roomMaxCapacity >= (studentCount + mentorCount)) {
    enoughSpaceInRoom =  true
  } else {
    enoughSpaceInRoom =  false
  }
 // finish this statement

let personA = "Daniel";
let personB = "Irina";
let sameName;
  if (personA === personB) {
    sameName =  true
  } else {
    sameName =  false
  }
 // finish this statement

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log("Are there more students than mentors?", moreStudentsThanMentors);
console.log(
  "Is there enough space in the room for all students and mentors?",
  enoughSpaceInRoom
);
console.log("Do person A and person B have the the same name?", sameName);

/* 
  EXPECTED RESULT
  ---------------
  Are there more students than mentors? true
  Is there enough space in the room for all students and mentors? true
  Do person A and person B have the the same name? false
*/

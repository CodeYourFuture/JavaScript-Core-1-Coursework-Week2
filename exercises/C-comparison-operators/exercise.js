/*
  BOOLEAN WITH COMPARISON OPERATORS
  ---------------------------------
  Using comparison operators complete the unfinished statements.
  The variables should have values that match the expected results.
*/

const studentCount = 16;
const mentorCount = 9;
const moreStudentsThanMentors = (studentCount > mentorCount); 

const roomMaxCapacity = 25;
const enoughSpaceInRoom = roomMaxCapacity >= (studentCount + mentorCount); 

const personA = "Daniel";
const personB = "Irina";
const sameName = personA === personB;

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

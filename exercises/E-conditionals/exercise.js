/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

let name = "Daniel";
let danielsRole = "mentor" 
 //let danielsRole = "student";

function roleCheker (firstName, role) {
let mentor = "mentor"
let student ="student"
if ( role === mentor){
  return `Hi, I'm ${firstName}, I'm a ${mentor}` ;   
} else {
  return `Hi, I'm ${firstName}, I'm a ${student}` ;
}
}
console.log(roleCheker(name ,danielsRole));
/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/

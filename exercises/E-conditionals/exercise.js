/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/
function checkRole(){
var name = "Daniel";
var danielsRole = "mentor";
if (danielsRole === "mentor"){
  return `Hi, I'm ${name}, I am a ${danielsRole}.`
} else if (danielsRole === "student"){
  return `Hi, I'm ${name}, I am a student.`
}
}
console.log(checkRole());
/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/

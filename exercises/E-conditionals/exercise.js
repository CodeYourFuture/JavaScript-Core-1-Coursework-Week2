/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/
// I am unable to see the point of this exercise.
// why can't we do this console.log(`Hi, I'm ${name}, I'm a ${danielsRole}`);

var name = "Daniel";
var danielsRole = "mentor";
if (danielsRole == "mentor") {
  console.log("Hi,I'm Daniel, I am a mentor");
}
if (danielsRole == "student") {
  console.log("Hi,I'm Daniel, I am a student");
}
/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/

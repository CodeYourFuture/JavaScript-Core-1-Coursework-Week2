/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

var personName = "Daniel";
var danielsRole = "mentor";

if (danielsRole === "mentor") {
    console.log(`Hi, I'm ${personName}, I'm a ${danielsRole}.`)
}

/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/

/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

var name = "Daniel";
var danielsRole = "mentor";

function checkStatus(value1, value2) {
  if (value2 === "mentor") {
    console.log(`Hi, I'm ${value1}, I'm a ${value2}.`);
  } else {
    console.log(`Hi, I'm ${value1}, I'm a ${value2}.`);
  }
}
checkStatus(name, danielsRole);
/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/

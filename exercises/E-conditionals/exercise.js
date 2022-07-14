/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

var name = "Daniel";
var danielsRole = "mentor";
if (danielsRole.localeCompare("mentor")===0){
  console.log( "Hi, I'm Daniel, I'm a mentor.");
}
if(danielsRole.localeCompare("student")===0){
  console.log("Hi, I'm Daniel, I'm a student.");
}

/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/

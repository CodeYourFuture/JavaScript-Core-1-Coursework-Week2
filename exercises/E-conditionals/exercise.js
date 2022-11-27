/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

let name = "Daniel";
let danielsRole = "mentor";
if (danielsRole === "mentor")
  return `Hi, I 'm ${name}, I am a mentor`;
else
  return `Hi, I 'm ${name}, I am a student`;
// We could solve this with only one return instead of using if.

/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/

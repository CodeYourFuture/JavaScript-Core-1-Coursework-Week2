/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

const name = "Daniel";
const danielsRole = "mentor";

if (danielsRole === "mentor") {
  const message = `Hi, I'm ${name}, I'm a mentor`;
  console.log(message);
} else if (danielsRole === "student") {
  const message = `Hi, I'm ${name}, I'm a student`;
  console.log(message);
}

/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/

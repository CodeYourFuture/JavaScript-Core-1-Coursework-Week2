/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

const name = "Daniel";
const danielsRole = "mentor";

function classRole(danielsRole) {
  if (danielsRole === "mentor") {
    return "I'm a mentor.";
  } else return "I'm a student.";
}

console.log("Hi, I'm " + name + ", " + classRole(danielsRole));

/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/

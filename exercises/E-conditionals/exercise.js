/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

let name = "Daniel";
let danielsRole = "mentor";

function roleCheck(danielsRole) {
  if (danielsRole === "mentor") {
    console.log("Hi, I am " + name + "," + "I am a " + danielsRole + ".");
  } else if (danielsRole === "student") {
    console.log("Hi, I am " + name + "," + "I am a " + danielsRole + ".");
  }
}
roleCheck("mentor");

/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/

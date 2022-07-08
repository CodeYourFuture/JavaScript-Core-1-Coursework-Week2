/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

let name = "Daniel";
let danielsRole = "Mentor";

if (danielsRole === "mentor" || danielsRole == "Mentor") {
  console.log("Hi, I'm Daniel, I'm a mentor");
  // Additional
} else if (danielsRole === "none" || danielsRole == "None") {
  console.log("Hi, I'm Daniel, I'm not involved in CYF");
  // ..
} else {
  console.log("Hi, I'm Daniel, I'm a student");
}


/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/

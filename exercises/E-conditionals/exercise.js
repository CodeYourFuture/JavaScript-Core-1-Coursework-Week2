/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

let myName = "Daniel";
let danielsRole = "mentor";
let x = `student`;

if (`mentor` === danielsRole) {
  console.log(`Hi, I'm ` + myName + ` I'm a mentor.`);
} else {
  console.log(`Hi, I'm ` + myName + ` I'm a student `);
}

//test
if (`mentor` === x) {
  console.log(`Hi, I'm ` + myName + ` I'm a mentor.`);
} else {
  console.log(`Hi, I'm ` + myName + ` I'm a student `);
}

/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/

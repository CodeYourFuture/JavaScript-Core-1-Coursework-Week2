/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

var name = "Daniel";
var danielsRole = "mentor";
//I'm unsure if I am supposed to wrap this in a function so I just will
//if this is wrong, I can always change it quick ;-)

function rolePrinter(name, role) {
  return role === "mentor" ? `Hi, I'm ${name}, I'm a mentor.` : `Hi, I'm ${name}, I'm a student.`;
  //alternatively:
  //return `Hi, I'm ${name}, I'm a ${role}`;
}
console.log(rolePrinter(name, danielsRole));

/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/

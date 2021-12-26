/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

let name = "Daniel";
let role = "mentor";


function checkRole(name, role){
  if (name === "Daniel" && role=== "mentor") {
    return `Hi I'm ${name}, I'm a ${role}`
  }

  else {
    return `Hi I'm ${name}, I'm a student`
  }

}

console.log(checkRole("Daniel", "mentor"));
console.log(checkRole("Rose", "mentor"));

/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/

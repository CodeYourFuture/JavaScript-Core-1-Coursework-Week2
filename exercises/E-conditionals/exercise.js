/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

let name = "daniel";
let danielsRole = "mentor";
function checkNameandRole(name, danielsRole) {
  if (name === "Daniel" && danielsRole === "mentor") {
    return "Hi, I'm Daniel, I'm a mentor";
  } else if (name === "Daniel" && danielsRole === "student") {
    return "Hi, I'm Daniel, I'm a student.";
  } else {
    return "I am superwoman";
  }
}
console.log(checkNameandRole("Daniel", "student"));

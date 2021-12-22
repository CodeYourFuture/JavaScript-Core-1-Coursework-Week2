/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

function Role(name, danielsRole) {
 
  if (name == "Daniel" && danielsRole == "mentor"){
    return "Hi, I'm Daniel, I'm a mentor.";
  }if (danielsRole == "student"){
    return "Hi, I'm Daniel, I'm a student.";
  }
}

console.log(Role("Daniel", "mentor"));
console.log(Role("Daniel", "student"));


/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/

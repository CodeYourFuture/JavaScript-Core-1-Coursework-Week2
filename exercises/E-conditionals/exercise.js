/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

var name = "Daniel";
var danielsRole = "mentor";

function isDanielStudentOrMentor(){
  if(danielsRole === "mentor"){
    return "Hi, I'm Daniel, I'm a mentor";
  } else {
    return "Hi, I'm Daniel, I'm a student";
  }
}

console.log(isDanielStudentOrMentor());
/*
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/

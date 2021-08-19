/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

var name = "Daniel";
var danielsRole = "mentor";
function roleInCyf(name, role){
  if(role === "mentor"){
    return "Hi, I'm" + (name) + ", I'm a " + role.;
  }else{
    return `Hi, I'm ${name}, I,m a student.`;
  }

}
console.log(roleInCyf(name, role));

/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/

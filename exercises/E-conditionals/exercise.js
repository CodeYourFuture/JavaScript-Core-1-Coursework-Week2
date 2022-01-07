/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

function Role(danielsRole) {
 
  if (danielsRole == "mentor"){
    return "Hi, I'm Daniel, I'm a mentor.";
  }if (danielsRole == "student"){
    return "Hi, I'm Daniel, I'm a student.";
  }
}


console.log(Role("mentor"));
console.log(Role( "student"));


/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/

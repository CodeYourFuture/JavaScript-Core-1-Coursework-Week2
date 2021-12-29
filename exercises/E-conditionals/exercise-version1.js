/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

let danielsRole = "mentor";
let message = "Hi, I'm Daniel, I'm a "
if (danielsRole === "mentor")
    message+= "mentor."
else
    message+= "student.";
console.log(message);

/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/

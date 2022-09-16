/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "c"
*/

let name6 = "Daniel";
let danielsRole = "mentor";
// This function check Daniel is montor or Studant 
function checkStaff (role){
return (role === "monter")
  ? `I'm ${name6} , I'm a ${danielsRole}`
  : `Hi , I'm ${name6} , I'm a studant`;  
}

console.log(checkStaff("monter"))
/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/

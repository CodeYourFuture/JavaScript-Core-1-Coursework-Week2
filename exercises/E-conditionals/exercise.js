/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

// let name = "Daniel";
// let danielsRole = "mentor";
function role(name, danielsRole){
  if((danielsRole = "mentor") && (name= "Daniel")){
    console.log("Hi, I'm Daniel, I'm a mentor.");
  }
  else {
    console.log("Hi, I'm Daniel, I'm a student.");
  }
}
let name = "Daniel";
let danielsRole = "mentor";
role();


/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/

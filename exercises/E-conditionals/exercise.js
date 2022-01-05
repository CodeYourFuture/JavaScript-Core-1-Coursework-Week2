/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

let name = "Daniel";
let danielsRole = "MeNtor";

function role(position){
  //This funtion ignores Case sensivity - 
  if(position.toLowerCase().includes('mentor'.toLowerCase())){
    return `Hi I'm ${name}, I'm a Mentor.`
  } else { return `Hi I'm ${name}, I'm a just a Student.`}
}

console.log(role(danielsRole))
/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/

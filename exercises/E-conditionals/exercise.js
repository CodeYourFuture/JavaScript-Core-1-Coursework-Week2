/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."

  let isHappy = true;

if (isHappy) {
  console.log("I am happy 😄");
} else {
  console.log("I am not happy 😢");
}
*/

let firstName = "Daniel";
let danielsRole = "mentor";

function whatHisRole (firstname, role){
  if (danielsRole === "mentor") {
    return `Hi, I'm" ${firstName}, I'm a mentor`;
  } else {
    return `Hi, I'm" ${firstName}, I'm a student`;
  }
}


/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/

/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

var names = "Daniel";
var danielsRole = "mentor";

if (names === "Daniel" && danielsRole === 'mentor.') {
    console.log(
        `Hi, I'm ${names}, I'm a ${danielsRole} `);
} else {
    console.log('I am a lost boy!');

}
/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/
/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

var name = "Daniel";
var danielsRole = "mentor";
function hisRole(danielsRole){
if (danielsRole ==="mentor"){
  return "i'm a mentor "
}else {
  return " i'm a student"
}}
console.log ("hi i,m"+ "Daniel ," +hisRole(danielsRole)  )

/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/

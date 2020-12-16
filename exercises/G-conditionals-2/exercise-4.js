/*
  Conditionals
  ---------------------------------
  Write a function that checks if a sentence contains the word "code"
  - if the sentence contains the word "code" then return true
  - otherwise return false

  Hint: Google how to check if a string contains a word
*/

var word = sentence1
function containsCode(sentence) {
  if (sentence === sentence1) {
    return "true";
  } else if (sentence < sentence2) {
    return "false";
  }  if (sentence !== sentence3)
  return "false"
}


/* 
DO NOT EDIT BELOW THIS LINE
--------------------------- */
var sentence1 = "code your future";
var sentence2 = "draw your future";
var sentence3 = "design your future";

console.log("'" + sentence1 + "': " + containsCode(sentence1));
console.log("'" + sentence2 + "': " + containsCode(sentence2));
console.log("'" + sentence3 + "': " + containsCode(sentence3));

/* 
    EXPECTED RESULT
    ---------------
    'code your future': true
    'draw your future': false
    'design your future': false
    */

/*
    A for-of loop is a easy and way of looping through the elements of an array, string or any other "iterable object" (think sequence of elements).    
*/

// TODO Use a for-of loop to capitalise and output each letter in the string seperately.
let str = "codeyourfuture";
let result = "";

for (let char of str) {
  result += char.toUpperCase();
}

// to find index number too
/* for (let [index, char] of str.entries()) {
  result += char.toUpperCase() + index;
}
 */

console.log(result);

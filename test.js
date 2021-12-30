function tidyUpStrings(arrayOfStrings) {

 for (let i = 0; i < arrayOfStrings.length; i++) {
   

 arrayOfStrings.replace(/[/]/).trim().toLowerCase(); }
}

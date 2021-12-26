function tidyUpStrings(arrayOfStrings) {
    for (let i=0; i<arrayOfStrings.length; i++) {
      arrayOfStrings[i] = arrayOfStrings[i].trim()
      arrayOfStrings[i] = arrayOfStrings[i].replace('/', '')
      arrayOfStrings[i] = arrayOfStrings[i].toLowerCase()
    }
    return arrayOfStrings
    
}
console.log(tidyUpStrings(['n/ame', '  kelly  ', 'Lima  ']))
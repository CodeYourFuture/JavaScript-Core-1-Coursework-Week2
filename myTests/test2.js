// function validate(num) {
//   if (Number.isInteger(num) && num % 2 === 0 && num <= 100) {
//     return true
//   } else return false
// }

// console.log(validate(20));
// console.log(validate(55));
// console.log(validate(110));
// console.log(validate("rob"));
// console.log(validate(true));
// console.log(validate(false));


// function formatPercentage(num) {
//   num = Math.round(num * 100) / 100;
//   if (num > 100) {
//     return 100
//   }
//   return `${num}%`
// }

// console.log(formatPercentage(10));
// console.log(formatPercentage(15.2322));
// console.log(formatPercentage(-30));
// console.log(formatPercentage(-45.43434));
// console.log(formatPercentage(2343));
// console.log(formatPercentage(2334.3434));


// function tidyUpString(arrayOfStrings) {
//      return arrayOfStrings.map(function(e) {return e.trim();}) 
       
//      }

// function tidyUpString(arrayOfStrings) {
//     return arrayOfStrings.map(function(e) {
//         return e.replace(/\//g, "");})
// }     

// function tidyUpString(arrayOfStrings) {
//     return arrayOfStrings.map(function(e) {
//         return e.toLowerCase();
//     })
// }

// function tidyUpString(arrayOfStrings) {
//      lowerCaseArray = arrayOfStrings.map(function(e) {
//         return e.toLowerCase();
//     })
//      replaceCharArray = lowerCaseArray.map(function(e) {
//          return e.replace(/\//g, "");
//         })
//      trimArray = replaceCharArray.map(function(e) {return e.trim();
//     })
//     return trimArray      
//   }  
    




// let arr
// arr = ["  Hello this is STRING One ",
//            "   Hello   and this is /string /number/ two  ",
//            "   A   nd this is/ /// string ///number/four  " ]



           
// console.log(tidyUpString(arr));



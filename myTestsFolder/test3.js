// let a = 6;

// for (let i = 0; i < 5; ++i) {
//     a = a + 1;
// }

// console.log(a);

// let x = 2;


// const f2 = function (a, b) {
//   return a + b + x;
// };

// console.log(f2(0, 2));

function getAllFrequencies() {  
    let frequencies = [];
  for (let i = 87; i <= 108; i++) {               
          frequencies.push(i);              
  }
  return frequencies;
}

function isRadioStation(num) {
  if (getAllFrequencies().includes(num)) {
       return true;  
  }
  return false;
}


console.log(isRadioStation(108));


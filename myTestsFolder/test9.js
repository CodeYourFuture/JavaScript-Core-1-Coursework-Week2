function countSheeps(arrayOfSheep) {
  let count = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) 
        count++;
    
    
  }
  return count;
}




arrayOfSheep = [true, true, false, true, false, true];

console.log(countSheeps(arrayOfSheep));
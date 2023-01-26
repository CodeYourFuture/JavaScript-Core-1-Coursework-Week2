function get3rdIndex(arr) {
  let index = arr.slice(3,4);
  let element = index[index.length -1];

return element;
  }   // 
  
  let numArray =[11, 37, 62, 18, 19, 3, 30]; 
  let fruitArray = ["fruit", "banana", "apple", "strawberry", "raspberry"];

  console.log(get3rdIndex(numArray));
  console.log(get3rdIndex(fruitArray));


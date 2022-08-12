function grow(x){
  let sum = 1;
  for (let i = 0; i < x.length; i++) {
    sum = sum * x[i];
   }   
    return sum
}

let arr = [1,2,3,4,5];

console.log(grow(arr));

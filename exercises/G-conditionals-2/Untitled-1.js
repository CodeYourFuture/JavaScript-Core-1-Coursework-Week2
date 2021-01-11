// function validate(num) {
  
//   for( var i = 0; i < num.length; i+=2){
//     typeof (num === Number && num <= 100);
//     let numb = console.log(typeof (num === Number && num <= 100));
    
//   }
//   return numb;
// }
// console.log(validate(50));

var strArr = ["     Aaishah ", "/Abdkabeer ", "    Ma/ryam"];
for (let i = 0; i < strArr.length; i++) {
  let spaRem = strArr[i].trim().replace("/", "").toLowerCase();
  // let fwdRem = spaRem.replace("\/", "")
  strArr[i] = spaRem;
  console.log(spaRem, strArr[i]);
}
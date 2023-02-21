
/*
Fizz-Buzz Game: write the program that prints the numbers from 20 to 35 and for 
multiples of ‘3’ print “Fizz” instead of the number,
and for the multiples of ‘5’ print “Buzz”,
and for multiples of '5' and '3' print "FizzBuzz".
//* this exercise is for practicing "Conditionals: if-without-else , for" and "Logical Operators" and also "Comparison : ==="!
*/
function fizzBuzz (number){

  }
  console.log(fizzBuzz(1));
  console.log(fizzBuzz(3));
  console.log(fizzBuzz(5));
  console.log(fizzBuzz(15));
  
//   for (let i = 20 ; i<= 35 ; i++){
//     console.log(fizzBuzz(i));
//   }
//   let j = 20;
//   while(j<=35){
//     console.log(fizzBuzz(j));
//     j+=1;
//   }
  
  /*
  complete function to check if user is acceptable or not acceptable (+18 years old is acceptable!):
  */ 
  function isAcceptableUser(userAge,isLoggedIn){
 
  }
  console.log(isAcceptableUser(21,true));
  
  /*
  complete function to apply discount percent based on how much is totalPrice in user cart.
  */
 
  function applyDiscount(totalPrice){
      
  }
  applyDiscount(120);
  applyDiscount(280);
  
  /*
  complete function to print odd numbers between 1 to limitNumber with while loop:
  */
  function printOddNumbers(limit){
    
  }
  printOddNumbers(10);
  
  /*
  complete buyTwoGetTheCheapestFree Function: if user buy two items, cheapest item will be free!
  */
  function buyTwoGetTheCheapestFree(price1,price2){
  
  }
  buyTwoGetTheCheapestFree(700,500);
  /*
  a function that check if user selected a color apply that else apply default color:
  */
  function productColor(selectedColor){
      
  
  }
  productColor("pink");
  productColor();
  
  /*
  complete function to print mood: happy/not happy.
  */
  function mood(isHappy) {

  }
  /*
  complete function to determine if it is suitable for person to register based on his age!
  age < 12 --> "Too Young To Register",
  12 < age < 90  --> "You Can Register",
  age > 90 --> "You Don't Need To Register"
  */
  function canRegister(age) {

  }
  
  function countReverse(num){
  
  }
  countReverse(20);
  
   
  
  /* ======= TESTS - DO NOT MODIFY ===== */
  
  
  test("FizzBuzz function return fizz or buzz or fizzbuzz or number ", () => {
      expect(fizzBuzz(1)).toEqual(1);
  });
  test("FizzBuzz function return fizz or buzz or fizzbuzz or number ", () => {
      expect(fizzBuzz(3)).toEqual("Fizz");
  });
  test("FizzBuzz function return fizz or buzz or fizzbuzz or number ", () => {
      expect(fizzBuzz(5)).toEqual("Buzz");
  });
  test("FizzBuzz function return fizz or buzz or fizzbuzz or number ", () => {
      expect(fizzBuzz(15)).toEqual("FizzBuzz");
  });

 test("isAcceptableUser function retern user is allowed or not", () => {
      expect(isAcceptableUser(21,true)).toEqual(true);
  });

 test("applyDiscount function retern price after discount", () => {
    expect(applyDiscount(120)).toEqual(114);
  });
 test("(applyDiscount function retern price after discount", () => {
    expect(applyDiscount(280)).toEqual(252);
  });

function expectprintOddNumbersToLog(expectedValues) {
    const consoleLogSpy = jest.spyOn(console, 'log');
    printOddNumbers(10);
    expect(consoleLogSpy).toBeCalledTimes(5);
    expectedValues.forEach((value, i) => {
      expect(consoleLogSpy).nthCalledWith(i+1, value);
    });
    consoleLogSpy.mockRestore();
};

 test("(buyTwoGetTheCheapestFree function retern maximum price to pay", () => {
    expect(buyTwoGetTheCheapestFree(700,500)).toEqual(700);
 });

 test("productColor function retern user-selected color or default color", () => {
      expect(productColor("pink")).toEqual("pink");
  });
 test("productColor function retern user-selected color or default color", () => {
    expect(productColor()).toEqual("purple");
});

 test("mood function works for true", () => {
    expect(mood(true)).toEqual("I am happy");
  });
  
 test("mood function works for false", () => {
    expect(mood(false)).toEqual("I am not happy");
  });

 test("(canRegister function retern if people can register or not", () => {
    expect(canRegister(45)).toEqual("You Can Register");
  });
 test("(canRegister function retern if people can register or not", () => {
    expect(canRegister(111)).toEqual("You Don't Need To Register");
  });

function expectcountReverseToLog(expectedValues) {
    const consoleLogSpy = jest.spyOn(console, 'log');
    countReverse(20);
    expect(consoleLogSpy).toBeCalledTimes(20);
    expectedValues.forEach((value, i) => {
      expect(consoleLogSpy).nthCalledWith(i+1, value);
    });
    consoleLogSpy.mockRestore();
};


 



  

  
  
  
  
  
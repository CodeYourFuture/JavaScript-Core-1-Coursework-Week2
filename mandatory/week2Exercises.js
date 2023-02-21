
/*
Fizz-Buzz Game: write the program that prints the numbers from 20 to 35 and for 
multiples of ‘3’ print “Fizz” instead of the number,
and for the multiples of ‘5’ print “Buzz”,
and for multiples of '5' and '3' print "FizzBuzz".
//* this exercise is for practicing "Conditionals: if-without-else , for" and "Logical Operators" and also "Comparison : ==="!
*/
function fizzBuzz (number){
    if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
    if (number % 3 === 0) return "Fizz";
    if (number % 5 === 0) return "Buzz";
    return number;
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
    let isAcceptable = userAge>18 && isLoggedIn;
    return(isAcceptable);  
  }
  console.log(isAcceptableUser(21,true));
  
  /*
  complete function to apply discount percent based on how much is totalPrice in user cart.
  */
 
  function applyDiscount(totalPrice){
      let discountPercent;
      if (totalPrice>200) {
          discountPercent = 10;
      }else{
          discountPercent = 5;    
      }
      return (totalPrice-(totalPrice*discountPercent)/100);
  }
  applyDiscount(120);
  applyDiscount(280);
  
  /*
  complete function to print odd numbers between 1 to limitNumber with while loop:
  */
  function printOddNumbers(limit){
    let i = 1;
    while(i<=limit){
        
        if(i%2!==0){
            console.log(i);
        }
        i+=1;
    }
  }
  printOddNumbers(10);
  
  /*
  complete buyTwoGetTheCheapestFree Function: if user buy two items, cheapest item will be free!
  */
  function buyTwoGetTheCheapestFree(price1,price2){
    if (price1>price2) return price1;
    return price2; 
  }
  buyTwoGetTheCheapestFree(700,500);
  /*
  a function that check if user selected a color apply that else apply default color:
  */
  function productColor(selectedColor){
      
    let defaulColor = "purple";
    return selectedColor||defaulColor;
  }
  productColor("pink");
  productColor();
  
  /*
  complete function to print mood: happy/not happy.
  */
  function mood(isHappy) {
    if (isHappy) {
      return 'I am happy';
    } else {
      return 'I am not happy';
    }
  }
  /*
  complete function to determine if it is suitable for person to register based on his age!
  */
  function canRegister(age) {
    if (age<12){
      return "You Are Too Young To Register";
    }
    else if(age>12 && age<90){
      return "You Can Register";
    }
    else{
      return "You Don't Need To Register";
    }
  }
  
  function countReverse(num){
    while(num>0){
        console.log(num);
        num = num-1;
    }
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
      expect(isAcceptableUser(21,true)).toEqual(true,false);
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


 



  

  
  
  
  
  
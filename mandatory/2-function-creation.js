/*
  Complete the function to return a boolean describing whether a user is acceptable. 
  To be acceptable, two conditions must be fulfilled
    1. the user should be 18 or older
    2. the user must be logged in
*/
function isAcceptableUser(userAge, isLoggedIn) {
  if (userAge >=18 && isLoggedIn) {
return true
  } else {
return false
  }
}

// See above, I start with a function isAcceptableUser with two parameters userAge and isLoggedIn. Inside the brackets, use an if... esle
// statement and in if I have the two values that can or not be fulfilled. Then I have an array in the array that return true or false

/*
  Complete the function to apply discount percent based on how much is totalPrice in user cart.
    - When the total price is greater than 200, a 10% discount should be applied
    - When the total price is less than 200, a 5% discount should be applied

  The function should return the new price to be paid (e.g. if the totalPrice is 150, a 5% discount
    is applieds and 142.5 should be returned)
*/

function applyDiscount(totalPrice) {
  if (totalPrice > 200){
return totalPrice - (totalPrice *0.1)
  } else {
   return totalPrice - (totalPrice *0.05)
  }
}

// I start with the function applyDiscount with a parameter totalPrice. Inside the brackets, I use an if... else statement. 
// in if I put in the value with a condition larger than 200. Then I use an array in the array to return what discout that
// apply. And if the value is greater than 200 it give 10 discount and prints the new price. Else it gives a 5% discount and
// print the new price.

/*
  Complete the function to print to the console the odd numbers between 1 and limit (use a while loop):
  */
function printOddNumbers(limit) {
 let num=1;
  while(num<limit){
    console.log(num);
    num=num+2;
  }
}
  
// function printOddNumbers(limit) {
//     i=1;
//     while (i % 2 != 0  && i < limit)
//     {
//     console.log(i);
//     i++
//     } 
// }

// See above active code. I start with a function printOddNumbers with a parameter limit. Inside the brackets I have a let 
// variable num that equals 1. I use a while loop  with the varaible num less that limit. Inside the brackets, I console.log
// num. After printing the value of num the function adds 2 so every odd number prints. The while loop contines until limit 
// equals num.


/*
  Complete the buyTwoGetTheCheapestFree function: if user buys two items, the cheapest item will be free!
  The function should return the price to be paid once the discount is applied.
*/
function buyTwoGetTheCheapestFree(price1, price2) {
  if (price1 < price2) {
return price2;
  } else if (price2 < price1){
return price1;
  }
}

// I start with a function buyTwoGetTheCheapestFree with two parameters price1 and price2. Inside the brackets, I use if...
// else if statement. If price1 > price2 in the array of the array I return price2 else if price2 is less than price1 I use
// return to print price1.


/*
  Complete the function to determine if it is suitable for a person to register based on their age!
  - if the person is 12 or younger it should return "You Are Too Young To Register"
  - if the person is older than 12 and younger than 90 it should return "You Can Register"
  - if the person is 90 or older it should return "You Don't Need To Register"
*/
function canRegister(age) {
  if (age <= 12 ) {
return "You Are Too Young To Register"
  } else if (age > 12 && age < 90) {
   
      return "You Can Register"
    }
  else {
return "You Don't Need To Register"
  }
}

// I start with the function canRegister with the parameter age. Inside the brackets I use an if... else if... else statement
// If parameter is less or equal to in the array of the array return will print the string You Are To Young To Register. Else
// if parameter age gretare ah 12 and less than 99 the return will print You Can Register. Else return will print You Dont Need
// To Register

/*
  Complete the function so that it prints out to the console numbers in reverse order starting at
  number and going down to 1 (e.g. if number was 3, it would print:
    3
    2
    1
  )
*/


function countReverse(number) {
for(let i=number; i>0; i--){
  console.log(i)
}
}

// function codewars
// repeatStr (n, s) {
// var str="";
// for(var i=0; i < n; i++)
//   str+=s;
//   return str;
// }


// I start with the function countReverse with the parameter number. Inside the brackets, I use a for loop to iterate the number
// with the condition i is greater than 0 and count down to 0 see i-- .

/* ======= TESTS - DO NOT MODIFY ===== */

describe("isAcceptableUser", () => {
  test("returns true if over 18 and logged in", () => {
    expect(isAcceptableUser(21, true)).toEqual(true);
  });

  test("returns true if 18 and logged in", () => {
    expect(isAcceptableUser(18, true)).toEqual(true);
  });

  test("returns false if under 18 and logged in", () => {
    expect(isAcceptableUser(17, true)).toEqual(false);
  });

  test("returns false if over 18 and not logged in", () => {
    expect(isAcceptableUser(21, false)).toEqual(false);
  });
});

describe("applyDiscount", () => {
  test("returns price with 5% discount", () => {
    expect(applyDiscount(120)).toEqual(114);
  });

  test("returns price with 10% discount", () => {
    expect(applyDiscount(280)).toEqual(252);
  });
});

describe("printOddNumbers", () => {
  test("printOddNumbers function prints odd numbers between 1 and 2", () => {
    const consoleLogSpy = jest.spyOn(console, "log");
    printOddNumbers(2);

    expect(consoleLogSpy).toBeCalledWith(1);
    consoleLogSpy.mockRestore();
  });

  test("printOddNumbers function prints odd numbers between 1 and 10", () => {
    const consoleLogSpy = jest.spyOn(console, "log");

    printOddNumbers(10);
    expect(consoleLogSpy).toHaveBeenNthCalledWith(1,1);
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2,3);
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3,5);
    expect(consoleLogSpy).toHaveBeenNthCalledWith(4,7);
    expect(consoleLogSpy).toHaveBeenNthCalledWith(5,9);

    consoleLogSpy.mockRestore();
  });
});

describe("buyTwoGetTheCheapestFree", () => {
  test("buyTwoGetTheCheapestFree function returns first price when it is largest", () => {
    expect(buyTwoGetTheCheapestFree(700, 500)).toEqual(700);
  });

  test("buyTwoGetTheCheapestFree function returns second price when it is largest", () => {
    expect(buyTwoGetTheCheapestFree(500, 700)).toEqual(700);
  });
});

describe("canRegister", () => {
  test("returns in case of a person of age 7", () => {
    expect(canRegister(7)).toEqual("You Are Too Young To Register");
  });

  test("returns in case of a person of age 12", () => {
    expect(canRegister(12)).toEqual("You Are Too Young To Register");
  });

  test("returns in case of a person of age 13", () => {
    expect(canRegister(13)).toEqual("You Can Register");
  });

  test("returns in case of a person of age 89", () => {
    expect(canRegister(89)).toEqual("You Can Register");
  });

  test("returns in case of a person of age 90", () => {
    expect(canRegister(90)).toEqual("You Don't Need To Register");
  });

  test("returns in case of a person of age 112", () => {
    expect(canRegister(112)).toEqual("You Don't Need To Register");
  });
});

describe("countReverse", () => {
  test("countReverse function logs values from 7 to 1", () => {
    const consoleLogSpy = jest.spyOn(console, "log");

    countReverse(7);
    expect(consoleLogSpy).toHaveBeenNthCalledWith(1,7);
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2,6);
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3,5);
    expect(consoleLogSpy).toHaveBeenNthCalledWith(4,4);
    expect(consoleLogSpy).toHaveBeenNthCalledWith(5,3);
    expect(consoleLogSpy).toHaveBeenNthCalledWith(6,2);
    expect(consoleLogSpy).toHaveBeenNthCalledWith(7,1);

    consoleLogSpy.mockRestore();
  });
});

/*
CHECK OUT solutions.md FOR MORE INFO ON OUR SOLUTION
*/

/* ======= TESTS - DO NOT MODIFY ===== */

/*
  Complete the function to return a boolean describing whether a user is acceptable. 
  To be acceptable, two conditions must be fulfilled
    1. the user should be 18 or older
    2. the user must be logged in
*/
let userAge = 19;
let isLoggedIn = true;
function isAcceptableUser(userAge, isLoggedIn){
  if (userAge >= 18 && isLoggedIn === true){
  return true;
 } else {
  return false;
 }
}

/*
  Complete the function to apply discount percent based on how much is totalPrice in user cart.
    - When the total price is greater than 200, a 10% discount should be applied
    - When the total price is less than 200, a 5% discount should be applied

  The function should return the new price to be paid (e.g. if the totalPrice is 150, a 5% discount
    is applied and 142.5 should be returned)
*/
//let totalPrice = 150;
function applyDiscount(totalPrice) {
  if (totalPrice >200){
    return (totalPrice - totalPrice * 0.01);
  } else  if ( totalPrice <200){
      return (totalPrice - totalPrice *0.1);
  }
}
//
//console.log(applyDiscount(220));
/*
  Complete the function to print to the console the odd numbers between 1 and limit (use a while loop):
  */
//function printOddNumbers(limit) {}
let limit = 0;
function printOddNumbers(limit) {
while (limit <= 10){
  console.log(limit);
} limit = limit + 1;
}
/*
  Complete the buyTwoGetTheCheapestFree function: if user buys two items, the cheapest item will be free!
  The function should return the price to be paid once the discount is applied.
*/
let price1 = 700;
let price2 = 500;
function buyTwoGetTheCheapestFree(price1, price2) {
  if(price1 > price2){
    return price1;
  } else if (price2 > price1){
    return price2;
  }
  //console.log("price is");
  
  }


/*
  Complete the function to determine if it is suitable for a person to register based on their age!
  - if the person is 12 or younger it should return "You Are Too Young To Register"
  - if the person is older than 12 and younger than 90 it should return "You Can Register"
  - if the person is 90 or older it should return "You Don't Need To Register"
*/
// && => and
// || => or
// ! => not 5!== 6 (or if is not equal to)

function canRegister(age) {
  if (age <= 12 ){
    return "You Are Too Young To Register";
  } else if (age < 90 && age > 12 ) {
    return "You Can Register"; }
    else if (age >= 90 ){
    return "You Don't Need To Register"; }

  }
  //console.log("You are too young to register")


/*
  Complete the function so that it prints out to the
   console numbers in reverse order starting at
  number and going down to 1 (e.g. if number was
   3, it would print:
    3
    2
    1
  )
*/
//while loop
//from 7 to 1
let number = 7;
function countReverse(number) {
  while (number >= 10 ){
    console.log(number);
    number = number--;
  }

}

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

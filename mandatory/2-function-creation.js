
function isAcceptableUser(userAge, isLoggedIn) {
  if(userAge>=18 && isLoggedIn)
    return isLoggedIn;
   else
    return false;
}


function applyDiscount(totalPrice) {
  if(totalPrice>200){
    totalPrice -= (totalPrice*0.1);
    return totalPrice;
  }
  if(totalPrice<200){
    totalPrice -=(totalPrice*0.05);
    return totalPrice;
  }
}


function printOddNumbers(limit) {
  let num=1;
  while(num<=limit){
    if(num%2==1){
      console.log(num)
    }
  num++;
  
 
  }
}


function buyTwoGetTheCheapestFree(price1, price2) {
 return price1>price2? price1: price2;
}

function canRegister(age) {

 return age<=12 ? "You Are Too Young To Register"
        : 12<age && age<90 ? "You Can Register" 
        :"You Don't Need To Register";
}

function countReverse(number) {
  if(number>=1){
    console.log(number);
    number-=1;
     countReverse(number);
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
// describe("countReverse", () => {
//   test("countReverse function logs values from 7 to 1", () => {
//     const consoleLogSpy = jest.spyOn(console, "log");

//     expect(consoleLogSpy).toBeCalledWith(7);
//     expect(consoleLogSpy).toBeCalledWith(6);
//     expect(consoleLogSpy).toBeCalledWith(5);
//     expect(consoleLogSpy).toBeCalledWith(4);
//     expect(consoleLogSpy).toBeCalledWith(3);
//     expect(consoleLogSpy).toBeCalledWith(2);
//     expect(consoleLogSpy).toBeCalledWith(1);

//     consoleLogSpy.mockRestore();
//   });
// });

/*
CHECK OUT solutions.md FOR MORE INFO ON OUR SOLUTION
*/

/* ======= TESTS - DO NOT MODIFY ===== */

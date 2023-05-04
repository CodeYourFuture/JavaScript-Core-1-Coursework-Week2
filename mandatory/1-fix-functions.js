/* Fix Functions

  Aim: to understand the change code inside functions 

  See the below functions. They are syntactically correct but are not outputting the right results.

  Run the tests and see how you can fix them.

  NOTE:Only make edits inside the function

*/

function getMood(isHappy) {
  // let isHappy = true;

  if (isHappy) {
    return "I am happy";
  } else {
    return "I am not happy";
  }
}

// See above, I start with a function getMood with the value isHappy. Inside the brackets, I return true or false. If true
// it prints I am happy and if false it prints I am not happy.


function greaterThan10(isBigEnough) {
  // let isBigEnough = true;

  if (isBigEnough > 10) {
    return "num is greater than 10";
  } else {
    return "num is not big enough";
  }
}

// I start with a function greaterThan10 with the value isBigValue. Inside the brackets, I return true or false. If true 
// it prints num is greater than 10 and if false it prints num is not big enough.


/* ======= TESTS - DO NOT MODIFY ===== */

describe("getMood", () => {
  test("getMood function works for true", () => {
    expect(getMood(true)).toEqual("I am happy");
  });

  test("getMood function works for false", () => {
    expect(getMood(false)).toEqual("I am not happy");
  });
});

describe("greaterThanTen", () => {
  test("works for value greater than 10", () => {
    expect(greaterThan10(11)).toEqual("num is greater than 10");
  });

  test("works for value much greater than 10", () => {
    expect(greaterThan10(96)).toEqual("num is greater than 10");
  });

  test("works for value less than 10", () => {
    expect(greaterThan10(9)).toEqual("num is not big enough");
  });

  test("works for value equal to 10", () => {
    expect(greaterThan10(10)).toEqual("num is not big enough");
  });
});

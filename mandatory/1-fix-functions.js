/* Fix Functions

  Aim: to understand the change code inside functions 

  See the below functions. They are syntactically correct but are not outputting the right results.

  Run the tests and see how you can fix them.

  NOTE:Only make edits inside the function

*/
// origin
function mood(x) {
  let isHappy = true; // the variable is only being used onece - so I hard coded it.
  if (isHappy === x) {
    return "I am happy";
  } else {
    return "I am not happy";
  }
}

// option 1
function mood(x) {
  if (x === true) {
    return "I am happy";
  } else {
    return "I am not happy";
  }
}
// option 2
function mood(x) {
  /* x is a booleon refere to test */
  if (x) {
    // here x is hard coded as `true` in the test
    return "I am happy";
  } else {
    return "I am not happy";
  }
}

function greaterThan10(num) {
  // 11
  let isBigEnough = 10 >= num; // isBigEnough must evaluate to a boolean  10 >= 11

  if (isBigEnough) {
    return "num is greater than 10"; // true - "num is greater than 10"
  } else {
    return "num is not big enough";
  }
}

// option 2
function greaterThan10(num) {
  // 11
  //let isBigEnough = 10 >= num; // isBigEnough must evaluate to a boolean  10 >= 11

  if (num > 10) {
    //depends which is said first
    return "num is greater than 10"; // true - "num is greater than 10"
  } else {
    return "num is not big enough";
  }
}
console.log(greaterThan10(11));

const strings = ["fruit", "banana", "apple", "strawberry", "raspberry"]; //declare anything before its used
function get3rdIndex(arr) {
  // let index = 3;
  // let element ;
  return arr[3];
}
console.log(get3rdIndex(strings));

// third element `apple`
// index of value `3` is `strawberry`

/* ======= TESTS - DO NOT MODIFY ===== */

test("mood function works for true", () => {
  expect(mood(true)).toEqual("I am happy");
});

test("mood function works for false", () => {
  expect(mood(false)).toEqual("I am not happy");
});

test("greaterThanTen function works for value greater than 10", () => {
  expect(greaterThan10(11)).toEqual("num is greater than 10");
});

test("greaterThanTen function works for value much greater than 10", () => {
  expect(greaterThan10(96)).toEqual("num is greater than 10");
});

test("greaterThanTen function works for value less than 10", () => {
  expect(greaterThan10(9)).toEqual("num is not big enough");
});

test("greaterThanTen function works for value equal to 10", () => {
  expect(greaterThan10(10)).toEqual("num is not big enough");
});

test("get3rdIndex function works with strings", () => {
  const strings = ["fruit", "banana", "apple", "strawberry", "raspberry"];
  const copyOfOriginal = strings.slice();
  expect(get3rdIndex(strings)).toEqual("strawberry");
  // Make sure get3rdIndex didn't change its input array.
  expect(strings).toEqual(copyOfOriginal);
});

test("get3rdIndex function works with numbers", () => {
  const numbers = [11, 37, 62, 18, 19, 3, 30];
  const copyOfOriginal = numbers.slice();
  expect(get3rdIndex(numbers)).toEqual(18);
  // Make sure get3rdIndex didn't change its input array.
  expect(numbers).toEqual(copyOfOriginal);
});

test("get3rdIndex returns undefined if not enough elements", () => {
  const numbers = [5, 10];
  expect(get3rdIndex(numbers)).toBeUndefined();
});

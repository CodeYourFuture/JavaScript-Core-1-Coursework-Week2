function multiplication(numberOne, numberTwo) {
    return numberOne * numberTwo;
}
let result = multiplication(1,5);
let resultOne = multiplication(2, 10);
let resultTwo = multiplication(2,15);
let resultThree = multiplication(2, 20);

console.log(result);
console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);

console.log('multiplication result is ' + (5 == multiplication(1, 5)));

test("multiplication result should be 5", () => {
  expect(multiplication(1, 5)).toEqual(5);
});
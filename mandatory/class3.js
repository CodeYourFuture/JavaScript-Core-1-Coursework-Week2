const stocks = ["aapl", "msft", "amzn", "googl", "tsla"];

const check = (arr) => {
  if (arr.length === 0) return "Empty portfolio";
  else {
    for (let i = 0; i < stocks.length; i++) {
      let item = stocks[i].toUpperCase();
      console.log("item", item);
    }
  }
  //return "return something";
};
console.log(check(stocks));

function addAllNumbers(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(addAllNumbers(3));

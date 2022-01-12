/*Write a function that:
Takes one number n as a parameter
Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
You should use a while loop
Test the function by calling it with different values. Is it giving you the expected result?*/
/*let sum = 0;
function sumUp(num) {
  while (num > 0) {
    sum += num;
    num--;
  }
  console.log(sum);
}
sumUp(3);

function sumUp(num) {
  let sum = 0;
  if (num > 0) {
    do {
      sum += num;
      num--;
    } while (num >= 0);
  }

  console.log(sum);
}
sumUp(-3);

function sumUp(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  console.log(sum);
}
sumUp(3);*/
/*********************************************************************************************** */

/*function showStocks(stocks) {
  if (stocks.length > 0) {
    let i = 0;
    
    while (i < stocks.length) {
      console.log(capitalizeStock(stocks[i]));
      i++;
    }
  } else {
    console.log("Empty Portfolio");
  }
}
showStocks(stocks);
function capitalizeStock(stockName) {
  return stockName.toUpperCase();
}*/
/*const stocks = ["aapl", "msft", "amzn", "googl", "tsla"];

function showStocks(stocks) {
  if (stocks.length > 0) {
    for (let i = 0; i < stocks.length; i++) {
      stocks[i] = capitalizeStock(stocks[i]);
    }
    return stocks;
  } else {
    return "Empty Portfolio";
  }
}

function capitalizeStock(stockName) {
  return stockName.toUpperCase();
}
console.log(showStocks(stocks));*/

/************************************************************************** */

/* Exercise: Capitalise the first letter of each string in an array*/

/*let initialArray = ["first", "second", "third"];

function capitalizeFirstLetter(word) {
  return word[0].toUpperCase() + word.substring(1);
}
function capitalizeEachWord(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = capitalizeFirstLetter(arr[i]);
  }
  return arr;
}
console.log(capitalizeEachWord(initialArray));*/

/*et phrase = "CodeYourFuture";
for (let letter of phrase) {
  console.log(letter);
}*/

const stocks = ["aapl", "msft", "amzn", "googl", "tsla"];

function showStocks(stocks) {
  let newArr = [];
  if (stocks.length > 0) {
    for (let item of stocks) {
      newArr.push(capitalizeStock(item));
    }
    return newArr;
  } else {
    return "Empty Portfolio";
  }
}

function capitalizeStock(stockName) {
  return stockName.toUpperCase();
}
console.log(showStocks(stocks));

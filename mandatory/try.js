/*function factorial(num) {
    let factorial = 1;
    let current = num;
    while (current > 1) {
      factorial *= current;
      current--;
    }
    return factorial;
  }

  // Example usage:
  console.log(factorial(5)); // output: 120

   factorial();*/

   function factorial(input) {
    let fact =1;
    
    while( input >1 ){

     fact = fact*input;
     input--;

     return fact;
    }

   }
   console.log(factorial(5));


function solve(num1, num2) {
  

    function factorial(num) {
     
        if (num === 0) {
            return 1;
        } else {
            return num * factorial (num - 1);
            }
        
    }
   let firstSum = factorial(num1);
   let secondSum = factorial(num2);

   let finalSum = firstSum / secondSum;
   console.log(finalSum.toFixed(2));
}

solve(5,2);
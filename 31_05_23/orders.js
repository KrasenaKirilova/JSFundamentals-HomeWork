function orders(good, quantity) {
      let sum = 0;
   
    switch(good) {
        case "coffee": return sum = (quantity * 1.50).toFixed(2); 
        case "water": return  sum = (quantity * 1.00).toFixed(2);
        case "coke": return sum = (quantity * 1.40).toFixed(2);
        case "snacks": return sum = (quantity * 2).toFixed(2);
    }
}    


let totalSum = orders("water", 10);
console.log(totalSum);

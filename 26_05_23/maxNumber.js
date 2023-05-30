function solve(input) {
  let isMax = false;

  for (let i = 0; i < input.length; i++) {
    let currentNum = input[i];

    if (currentNum >= input[i + 1]) {
      
      let firstElement = input.shift();
        input.push(firstElement);
   
    } else {
       
      isMax = false;
    }
  }
  
  console.log(input);
}

solve([1, 4, 3, 2]);

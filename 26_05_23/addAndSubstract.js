function solve(numbers) {
  
  let oldSum = 0;
  let newSum = 0;

  for (let i = 0; i < numbers.length; i++) {
    let currentNum = Number(numbers[i]);
    oldSum += currentNum;

    if (currentNum % 2 === 0) {
      currentNum += i;
    } else {
      currentNum -= i;
    }
    newSum += currentNum;
    numbers[i] = currentNum;
  }

  console.log(numbers);
  console.log(oldSum);
  console.log(newSum);
}
solve([5, 15, 23, 56, 35]);

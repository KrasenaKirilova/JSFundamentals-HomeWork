function solve(input) {
  let result = '';
  let arrLength = input.length;

  for (let i = 0; i < arrLength; i++) {

    let isMax = true;

    let currentNum = input[i];

    for (let j = i + 1; j < arrLength; j++) {

      let nextNum = Number(input[j]);

      if (currentNum <= nextNum) {
        isMax = false;
        break;
      }
    }
    if (isMax) {
      result += `${currentNum} `;
    }
  }
  console.log(result);
}

solve([1, 4, 3, 2]);

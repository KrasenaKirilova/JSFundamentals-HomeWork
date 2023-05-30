function solve(input, rotation) {
  for (let i = 0; i < rotation; i++) {
    let firstElement = input.shift();
    input.push(firstElement);
  }
  console.log(input.join(" "));
}

solve([51, 47, 32, 61, 21], 2);

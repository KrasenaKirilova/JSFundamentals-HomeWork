function solve(num) {
  let result = 0;
  let printLine = "";
  for (let i = 1; i <= 10; i++) {
    result = num * i;
    printLine = num + " X " + i + " = " + result;
    console.log(printLine);
  }
}

solve(5);

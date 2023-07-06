function solve(data, num1, num2) {

    
    let startNum = num1;
    let count = num2;
    
    let line = data.substring(startNum, startNum + count);
    console.log(line);

}

solve('ASentence', 1, 8);
solve('SkipWord', 4, 7);
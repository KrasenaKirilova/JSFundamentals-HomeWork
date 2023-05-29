function solve(start, end) {
    let sum = 0;
    let printLine = "";
    

    for(i = start; i <= end; i++) {
    sum += i;    
    printLine += i + " ";    
    }
    console.log(printLine);
    console.log(`Sum: ${sum}`);
    
}


solve(0, 26)
function repeatString(str, numOfRepeat) {
     let printStr = "";

    for(let i = 0; i < numOfRepeat; i++) {
        printStr += str;
    }
    return printStr;
    
}

let finalResult = repeatString("abc", 3);

console.log(finalResult);
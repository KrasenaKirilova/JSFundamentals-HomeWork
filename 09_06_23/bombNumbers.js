function bombNumbers(numArr, numSpecial){
    let bombNum = numSpecial[0];
    let bombPower = numSpecial[1];
    let resultSum = 0;
 
    for(let i = 0; i < numArr.length; i++){
        if(numArr[i] === bombNum){
            let bombIndex = numArr.indexOf(bombNum);
           
            numArr.splice(bombIndex, bombPower + 1);
            numArr.splice(Math.max(bombIndex - bombPower, 0), bombPower);
            i = Math.max(i - bombPower - 1, -1);
            
        }
    }
    numArr = numArr.filter(x => x !== Number(bombNum));
 
    for(let j = 0; j < numArr.length; j++){
        resultSum += Number(numArr[j]);
    }
    console.log(resultSum);
}


bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],[4, 2]);

bombNumbers([1, 4, 4, 2, 8, 9, 1],[9, 3]);

bombNumbers([1, 7, 7, 1, 2, 3],[7, 1]);

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],[2, 1]);
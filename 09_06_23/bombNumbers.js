function bombNumbers(demoArr, bombArr) {
    let bombNumber = bombArr[0];
    let power = bombArr[1];
    let resultArr = [];
    let demoArrLength = demoArr.length;

    for (let i = 0; i < demoArrLength; i++) {
        let currentNum = demoArr[i];

        if (currentNum === bombNumber) {
            let bombIndex = demoArr.indexOf(bombNumber);

            demoArr.splice(bombIndex, power);
            demoArr.splice(bombIndex - power, power + 1);
        }

    }
    let sum = 0;
    for (let j = 0; j < demoArr.length; j++) {
        sum += demoArr[j];
    }
    console.log(sum);
}





bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]);


bombNumbers([1, 4, 4, 2, 8, 9,
    1],
    [9, 3]);

bombNumbers([1, 1, 2, 1, 1, 1,
    2, 1, 1, 1],
    [2, 1]);
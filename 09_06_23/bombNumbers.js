function bombNumbers(demoArr, bombArr) {
    let specNumber = bombArr[0];
    let power = bombArr[1];
    let resultArr = [];
    let demoArrLength = demoArr.length;

    for (let i = 0; i < demoArrLength; i++) {
        let currentNum = demoArr[i];

        if (currentNum !== specNumber) {
            resultArr.push(currentNum);
            console.log(resultArr);
        } else {
            // resultArr.slice(5);
            // console.log(resultArr);
        }
    }





}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]);
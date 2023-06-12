function searchForNumbers(baseArr, commandArr) {
    let numsToTake = commandArr[0];
    let numsToDelete = commandArr[1];
    let searchNumber = commandArr[2];

    let resultArr = baseArr.slice(0, numsToTake);
    

    resultArr.splice(0, numsToDelete);
    

    let counter = resultArr.filter(el => el === searchNumber).length;

    console.log(`Number ${searchNumber} occurs ${counter} times.`);

}

//searchForNumbers([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForNumbers([7, 5, 5, 8, 2, 7],
    [3, 1, 5]);
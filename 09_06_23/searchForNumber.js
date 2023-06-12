function searchForNumber(arr, arr2) {

    let newArr = [];
    
    let counter = 0;
    let numsToTake = arr2[0];
    let numsToDelete = arr2[1];
    let searchNum = arr2[2];
    


    for (let i = 0; i < numsToTake; i++) {
        newArr.push(arr[i]);
      

    }
    newArr.splice(0, numsToDelete);

    
    let newArrLength = newArr.length;

    for (let j = 0; j < newArrLength; j++) {

        let currentNum = newArr[j];

        if (currentNum === searchNum) {
            counter++;
            
        } else {
            counter = 0;
        }
    }
    console.log(`Number ${searchNum} occurs ${counter} times.`);

}
//searchForNumber([5, 2, 3, 4, 1, 6],[5, 2, 3]);
searchForNumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);

// не работи каунтъра с първия пример





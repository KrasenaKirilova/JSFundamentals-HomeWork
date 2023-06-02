function solve(input) {
    let leftSum = 0;
    let rightSum = 0;
    let isEqual = false;
    let arrayLength = input.length;

    for (let i = 0; i < arrayLength; i++) {
        for (let j = 0; j < arrayLength; j++) {
            if (j !== i) {
                let num = Number(input[j]);
                if (j < i) {
                    leftSum += num;
                } else if (j > i) {
                    rightSum += num;
                }
            }
            if (i === 0) {
                leftSum = 0;
            } else if (i === arrayLength - 1) {
                rightSum = 0;
            }
        }
        if (leftSum === rightSum) {
            isEqual = true;
            console.log(i);
        } else {
            leftSum = 0;
            rightSum = 0
        }
    }
    if (!isEqual) {
        console.log('no');
    }

}


solve([1, 2, 3, 3]);
function sorting(input) {
    let sortedArr = input.sort((a, b) => a - b);
    let sortedLength = sortedArr.length;


    let newArr = [];

    for (let i = 0; i < sortedLength; i++) {
        let firstNum = sortedArr.shift();
        let lastNum = sortedArr.pop();

        newArr.push(lastNum);
        newArr.push(firstNum);

    }
    console.log(newArr.join(' '));
}

//sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32,
    7, 19, 47]);
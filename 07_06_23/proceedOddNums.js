function proceeOddNums(arr) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let newNum = 0;
        if (i % 2 !== 0) {
             newNum = arr[i] * 2;
            newArr.push(newNum);
        }
    }
console.log(newArr.reverse().join(' '));
}

proceeOddNums([10, 15, 20, 25] )
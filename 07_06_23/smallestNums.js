function smallestNums(arr) {

    let newArr = arr.sort((a, b) => a-b);
    let result = newArr.slice(0, 2);
    console.log(result.join(' '));
}

smallestNums([30, 15, 50, 5]);
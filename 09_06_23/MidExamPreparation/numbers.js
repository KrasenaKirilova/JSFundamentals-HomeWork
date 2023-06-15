function numbers(input) {

    let arr = input.split(' ');
    let newArr = arr.map(x => Number(x));
    let totalSum = 0;
    let count = 0;
    totalSum = newArr.reduce((a, c) => a + c);
    let average = totalSum / newArr.length;
    let selectedNums = [];

    for (let i = 0; i < newArr.length; i++) {
        let currentNum = newArr[i];
        // let nextNum = newArr[i+1];
        // console.log(currentNum);



        if (currentNum > average) {
            selectedNums.unshift(currentNum);
            count++;

        } else {
            count = 0;
        }

    }

    selectedNums.sort((a, b) => b - a);
    selectedNums.reverse();
    let cuttedNums = selectedNums.slice(-5);

    console.log(cuttedNums.join(' '));


    // console.log(totalSum);
    // console.log(`Average number = ${average.toFixed(2)}`);

}


numbers('10 20 30 40 50');

console.log('============');

numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');

console.log('============');

numbers('1');

console.log('============');

numbers('-1 -2 -3 -4 -5 -6');
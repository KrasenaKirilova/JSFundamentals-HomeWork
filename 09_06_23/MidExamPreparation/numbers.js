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

            if (currentNum > average) {
                selectedNums.unshift(currentNum);
                count++;
                } 
        }
       
        if (newArr.length >=2 && newArr.length < 5 ) {
            console.log('Les than 5 numbers');
        }

        if (newArr.length <= 1){
            console.log('No');
        }

        selectedNums.sort((a, b) => a - b);
        let cuttedNums = selectedNums.slice(-5);
        cuttedNums.reverse();
        console.log(cuttedNums.join(' '));
    }


    numbers('10 20 30 40 50');

    console.log('============');

    numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');

    console.log('============');

    numbers('1');

    console.log('============');

    numbers('-1 -2 -3 -4 -5 -6');
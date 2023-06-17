function numbers(input) {
    let numbers = input.split(' ').map(Number);
    let average = 0;
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i];
        sum += currentNumber;
    }

    average = sum / numbers.length;

    let biggerNumber = numbers.filter(x => x > average);
    biggerNumber = biggerNumber.sort((a, b) => b - a);
   
    biggerNumber = biggerNumber.slice(0, 5);

    if (biggerNumber.length === 0) {
        console.log('No');
    } else {
        console.log(biggerNumber.join(' '));
    }

}

numbers('10 20 30 40 50');

console.log('============');

numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');

console.log('============');

numbers('1');

console.log('============');

numbers('-1 -2 -3 -4 -5 -6');
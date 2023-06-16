function arrayModifier(input) {
    let initialArr = input.shift().split(' ').map(Number);
    let initialArrLength = initialArr.length;
    

    for (let index = 0; index < initialArrLength; index++) {
        let currentCommand = input[index].split(' ');
        let command = currentCommand.shift();
        let firstIndex = Number(currentCommand.shift());
        let secondIndex = Number(currentCommand.shift());
            console.log(firstIndex);
            console.log(secondIndex);
        }
       
    }





arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end']);


console.log('================');

arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]);
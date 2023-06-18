function arrayModifier(input) {
    let newArr = input.shift().split(' ').map(Number);
    let inputLength = input.length;
    
    for (let i = 0; i < inputLength; i++){
    let tokens = input.shift().split(' ');
    let command = tokens.shift();
    
            switch (command) {
                case "swap": {
                    let temp = newArr[tokens[0]];
                    newArr[tokens[0]] = newArr[tokens[1]];
                    newArr[tokens[1]] = temp;
                }
                break;
                case "multiply": {
                    let result = newArr[tokens[0]] * newArr[tokens[1]];
                    newArr[tokens[0]] = result;
                }
                break;
                case "decrease": newArr = newArr.map(x => x - 1); break;
                
                case "end": break;
            }
    }
    console.log(newArr.join(', '));
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
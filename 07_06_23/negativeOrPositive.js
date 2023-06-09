function negativeOrPositive (input) {
    
    let newArr = [];

    for (i = 0; i < input.length; i++) {
        let result = input[i];

        if (result < 0) {
            newArr.unshift(result);

        } else {
            newArr.push(result);
        }

    }
console.log(newArr.join('\n'));
        
}

// negativeOrPositive(['7', '-2', '8', '9']);
negativeOrPositive(['3', '-2', '0', '-1']);
function palindrom(input) {

    for(let i =0; i < input.length; i++) {
        let currentNumAsString = input[i].toString();
        let reversedNumAsString = currentNumAsString.split('').reverse().join('');
        if (currentNumAsString === reversedNumAsString) {
            console.log('true');
        } else {
            console.log('false')
        }
    }
}

//palindrom([123,323,421,121]);
palindrom([32,2,232,1010]);
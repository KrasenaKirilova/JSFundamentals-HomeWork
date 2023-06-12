function listOfProducts(input) {
    let newArr = input.sort();
    
    for (let i = 0; i < input.length; i++) {
        console.log(`${i + 1 }.${newArr[i]}`);
    }
}


listOfProducts(['Potatoes', 'Tomatoes', 'Onions',
    'Apples']);
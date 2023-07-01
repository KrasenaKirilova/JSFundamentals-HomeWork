function storage(input) {
    let storage = new Map();

    for (const line of input) {
        let [product, quantity] = line.split(' ');
        storage[product] = Number(quantity);
        console.log(storage);


    }
}

storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']);
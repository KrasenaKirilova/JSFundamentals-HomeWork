function storage(input) {
    let storage = new Map();

    for (const line of input) {
        let tokens = line.split(' ');
        let product = tokens[0];
        let quantity = Number(tokens[1]);
        if (!storage.has(product)) {
            storage.set(product, +quantity);
        } else {
            let currentQuantity = storage.get(product);
            let newQuantity = currentQuantity + quantity;
            storage.set(product, newQuantity);
        }
    }

    for (const kvp of storage) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']);
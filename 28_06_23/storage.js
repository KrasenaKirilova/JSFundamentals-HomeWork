function storage(input) {
    let storage = new Map();

    for (const line of input) {
        let [product, quantity] = line.split(' ');
        storage[product] = Number(quantity);
    }
    if(!storage.has(product)) {
        storage.set(product, +quantity);
    } else {
        let currentQuantity = storage.get(product);
        let newQuantity = currentQuantity + quantity;
        storage.set(product, newQuantity);
    }
    for (const [key, value] of storage) {
        console.log(`${key} -> ${value}`);
    }
}

storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']);
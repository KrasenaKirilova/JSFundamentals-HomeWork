function solve(firstArr, secondArr) {

    let store = {};

    for (let i = 0; i < firstArr.length; i += 2) {

        let product = firstArr[i];
        let quantity = Number(firstArr[i + 1]);

        store[product] = quantity;
    }

    for (let j = 0; j < secondArr.length; j += 2) {
        let product = secondArr[j];


        if (!store.hasOwnProperty(product)) {
            store[product] = 0;
        }
        store[product] += Number(secondArr[j + 1]);
    }

    for (const product in store) {
        console.log(` ${product} -> ${store[product]}`);

    }
}


solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ]);
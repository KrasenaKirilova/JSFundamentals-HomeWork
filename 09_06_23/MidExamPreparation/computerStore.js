function computerStore(input) {
    let index = 0;
    let command = input[index];
    index++;
    let sum = 0;
    

    while (command !== 'regular') {
        if (command === 'special') {

            break;
        }

        let curentPrice = Number(command);

        if (curentPrice < 0) {
            console.log('Invalid price!');
            command = input[index];
            index++;
            continue;
        }
        sum += curentPrice;
        command = input[index];
        index++;

        
    }
    let taxes = sum * 0.2;
    let totalPrice = sum + taxes;

    if (command === "special") {
        totalPrice *= 0.9;
    }

    if (totalPrice === 0) {
        console.log('Invalid order!');
    } else {
    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${sum.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log('-----------');
    console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }
}



computerStore(([

    '1050',

    '200',

    '450',

    '2',

    '18.50',

    '16.86',

    'special'

]));
console.log('------------------------');
computerStore([
    "1023",

    "15",

    "-20",

    "-5.50",

    "450",

    "20",

    "17.66",

    "19.30",

    "regular",
]);

console.log('------------------------');

computerStore([

    'regular'

]);

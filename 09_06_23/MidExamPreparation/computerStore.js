function computerStore(input) {
    let index = 0;
    let command = input[index];

    let sum = 0;
    let taxes = 0.2;
    let totalPrice = 0;

    while (command !== 'regular') {
        let curentPrice = Number(command); 
        if (curentPrice < 0) {
            console.log('Invalid price!'); 
            index++;
            command = input[index];
            continue;
        }
        sum += curentPrice; 
        index++;
        command = input[index];
       

       
        if (totalPrice < 0) {
            console.log('Invalid order!');
        }
        if (command === 'special') {
            discount = sum * 0.1;
            sum = (sum - discount) * taxes;
            break;
        }
    }
    taxes = sum * taxes;
    totalPrice = sum + taxes;

    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${sum.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log('----------------');
    console.log(`Total price: ${totalPrice.toFixed(2)}$`);

}

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

computerStore(([

    '1050',
    
    '200',
    
    '450',
    
    '2',
    
    '18.50',
    
    '16.86',
    
    'special'
    
    ]));

    computerStore([

        'regular'
        
        ]);

function solve(input) {
    const pattern = />>(?<name>\w+)<<(?<price>\d*\.?\d+)!(?<quantity>\d+)/;
    let totalSum = 0;

    console.log('Bought furniture:');

    for (const element of input) {
        let result = element.match(pattern);

        if (result) {
            let name = result.groups.name;
            let price = Number(result.groups.price);
            let quantity = +result.groups.quantity;

            totalSum += price * quantity;

            console.log(name);
        }
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);

}



// solve(['>>Sofa<<312.23!3',
//     '>>TV<<300!5',
//     '>Invalid<<!5',
//     'Purchase']);


solve(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']);
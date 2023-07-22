function solve(input) {
    
    let pattern = /%(?<name>[A-Za-z]+)%[^|$&.]*\<(?<product>\w+)\>[^|$&.]*\|(?<quantity>\d+)\|[^|$&.0-9]*(?<price>\d+.?\d*)\$/g;
    let i = 0;
    let currentLine = input[i];
    let totalSum = 0;

    while (currentLine !== 'end of shift') {
        let match = [...currentLine.matchAll(pattern)];

        for (const el of match) {
            let prices = Number(el.groups.quantity) * Number(el.groups.price);
            totalSum += prices;

            console.log(`${el.groups.name}: ${el.groups.product} - ${prices.toFixed(2)}`);

        }

        i++;
        currentLine = input[i];

    }

    console.log(`Total income: ${totalSum.toFixed(2)}`);
}

solve(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);
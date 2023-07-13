function solve(input) {
    let players = new Map();

    const power = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    };
    const multiplier = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    };

    for (const line of input) {
        let [name, cards] = line.split(': ');

        if (!players.has(name)) {
            players.set(name, new Set(cards.split(', ')));
        }
        else {
            for (const card of cards.split(', ')) {
                players.get(name).add(card);
            }
        }
    }
    for (const [name, cards] of players) {
        let sumOfCards = 0;


        // for (const card of cards) {
        //     const powerValue = power[card.charAt(0)];
        //     const multiplierValue = multiplier[card.charAt(1)];
        //     const cardValue = powerValue * multiplierValue;
        //     sumOfCards += cardValue;
        // }


        for (const card of cards) {
            const powerValue = power[card.slice(0, -1)];
            const multiplierValue = multiplier[card.slice(-1)];
            const cardValue = powerValue * multiplierValue;
            sumOfCards += cardValue;
        }

        console.log(`${name}: ${sumOfCards}`);
    }
}

solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);
console.log('------------------');
solve([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
])
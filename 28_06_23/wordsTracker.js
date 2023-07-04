function solve(input) {
    let map = new Map();

    let searchWords = input.shift().split(' ');


    searchWords.forEach(word => {
        map.set(word, 0);
    });

    for (const element of input) {
        for (const word of searchWords) {
            if (element === word) {
                let quantity = map.get(element);
                map.set(element, quantity + 1);
            }
        }
    }
    
    let sortedArr = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
    sortedArr.forEach(element => {
        console.log(`${element.join(' - ')}`);
    });
}


solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);
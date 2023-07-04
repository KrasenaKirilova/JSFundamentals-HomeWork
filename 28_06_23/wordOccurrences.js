function solve(input) {

    let map = new Map();

    input.forEach(word => {
        map.set(word, 0);
    });

    input.forEach(word => {
        if (map.has(word)) {
            let quantity = map.get(word);
            map.set(word, quantity + 1);
        }
    });

    let sortedArr = Array.from(map.entries());
    sortedArr.sort((a, b) => b[1] - a[1]);
    sortedArr.forEach(element => {
        console.log(`${element.join(' -> ')} times`);
    });
}


solve(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"]);
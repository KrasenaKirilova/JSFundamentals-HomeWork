function solve(input) {
    let wordsArr = input.split(' ').map(x => x.toLowerCase());
    let wordsObject = {};
    //let counter = 0;

    for (const word of wordsArr) {
        if (!wordsObject.hasOwnProperty(word)) {
            wordsObject[word] = 0;
        }
        wordsObject[word]++;

    }
    let filteredArr = Object.entries(wordsObject).filter(pairs => pairs[1] % 2 !== 0).sort((a, b) => b[1] - a[1]);
    let result = '';

    for (const array of filteredArr) {
        result += `${array[0]} `;
    }
    console.log(result);
}


solve('Cake IS SWEET is Soft CAKE sweet Food');
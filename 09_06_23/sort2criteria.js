function sorting(input) {

    let sortedArr = input.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }
        return a.localeCompare(b);
    });

    console.log(sortedArr.join('\n'));

}


sorting(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']);
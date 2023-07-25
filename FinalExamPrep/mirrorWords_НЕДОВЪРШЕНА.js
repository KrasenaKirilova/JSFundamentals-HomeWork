function solve(input) {
    let text = input.shift();
    //let pattern = /([@]|[#])([A-Za-z]{3,})\1{2}([A-Za-z]{3,})\1/gm
    let pattern = /([@]|[#])(?<word>[A-Za-z]{3,})\1/gm;
   // let pattern = /([@]|[#])([A-Za-z]{3,})([@]+|[#]+)([A-Za-z]{3,})\1/gm;

    let wordsArr = text.match(pattern);
    console.log(wordsArr);

    let palindromArr = [];

    for (let index = 0; index < wordsArr.length; index += 2) {
        let firstWord = wordsArr[index];
        let secondWord = wordsArr[index + 1];
        let reversedWord = secondWord.split('').reverse().join('');

        if (firstWord === reversedWord) {
            palindromArr.push(firstWord);
            palindromArr.push(reversedWord);

        }
        console.log(palindromArr);
    }
}

solve([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);
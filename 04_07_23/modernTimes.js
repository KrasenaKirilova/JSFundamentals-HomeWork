function solve(input) {
    let inputArr = input.split(' ');

    for (const word of inputArr) {
        if (word.startsWith('#') && word.length > 1) {
            let wordsArr = word.split('');
            wordsArr.shift();

            let selectedWords = '';

            for (const char of wordsArr) {

                if ((char.charCodeAt() < 97 || char.charCodeAt() > 122) &&
                    (char.charCodeAt() < 65 || char.charCodeAt() > 90)) {
                    selectedWords = '';
                    break;
                } else {
                    selectedWords += char;
                }
            }
            if (selectedWords.length > 0) {
                console.log(selectedWords);
            }
            
        }

    }
}
solve('Nowadays everyone uses #12gh to tag a #special word in #socialMedia');

solve('The symbol # is known #variously in English-speaking #regions as the #number sign');
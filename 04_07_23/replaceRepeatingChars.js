function solve(text) {
    let result = text[0];
    let textLength = text.length;


    for (let index = 1; index < textLength; index++) {
        let currentChar = text[index];
        let prevChar = text[index - 1];

        if (currentChar !== prevChar) {
            result += currentChar;
        }
    }

    console.log(result);
}


solve('aaaaabbbbbcdddeeeedssaa');
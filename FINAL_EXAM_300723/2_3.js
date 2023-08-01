function extractCommands(input) {
    let pattern = /!(?<command>[A-Za-z]+)!:\[(?<letters>[A-Za-z]{8,})\]/g;
    let asciiCodesArray = [];

    let match;
    while ((match = pattern.exec(input)) !== null) {
        let command = match.groups.command;
        let letters = match.groups.letters;

        // Записване на аски кодовете на буквите в масива
        let letterAsciiCodes = [];
        for (let i = 0; i < letters.length; i++) {
            letterAsciiCodes.push(letters.charCodeAt(i));
        }

        asciiCodesArray.push({
            command: command,
            asciiCodes: letterAsciiCodes
        });
    }

    return asciiCodesArray;
}

// let inputText = "Пример: !Command1!:[abcdefgh] !Command2!:[ABCDEFGH]";
// let result = extractCommands(inputText);
// console.log(result);



solve((["2",

    "!Send!:[IvanisHere]",

    "*Time@:[Itis5amAlready"]));

console.log('==========');

solve((["3",

    "go:[outside]",

    "!drive!:YourCarToACarWash",

    "!Watch!:[LordofTheRings]"]));
function solve(input) {
    let messageCount = Number(input.shift());
    let pattern = /!(?<command>[A-Za-z]+)!:\[(?<letters>[A-Za-z]{8,})\]/g;


    for (let i = 0; i < messageCount; i++) {
        let currentCommand = input[i];

        let result = pattern.exec(currentCommand);

        if (result === null) {
            console.log('The message is invalid');
        } else {
            let command = result.groups.command;

            let letters = result.groups.letters;
            let asciiValues = [];

            for (let i = 0; i < letters.length; i++) {
                let char = letters[i];
                let asciiCode = char.charCodeAt();
                asciiValues.push(asciiCode);

            }

            console.log(`${command}: ${asciiValues.join(' ')}`);
        }
    }

}


solve((["2",

    "!Send!:[IvanisHere]",

    "*Time@:[Itis5amAlready"]));

console.log('==========');

solve((["3",

    "go:[outside]",

    "!drive!:YourCarToACarWash",

    "!Watch!:[LordofTheRings]"]));
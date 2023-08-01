function solve(input) {
    let messageCount = Number(input.shift());
    let pattern = /!(?<command>[A-Za-z]+)!:\[(?<letters>[A-Za-z]{8,})\]/g;


    for (let i = 0; i < messageCount; i++) {
        let currentCommand = input[i];

        //    let result = currentCommand.match(pattern)
        console.log(result);

        while ((match = pattern.exec(currentCommand)) !== null) {
            let command = match.groups.command;
            let letters = match.groups.letters;


            let letterAsciiCodes = [];
            for (let i = 0; i < letters.length; i++) {
                letterAsciiCodes.push(letters.charCodeAt(i));
                console.log(letterAsciiCodes);
            }




            // if (!result) {
            //     console.log('The message is invalid');
            //     continue;
            // } else {
            //     console.log(`${command}:{number1} {number2} … {numberN}`);
            // }




            // let lettersArr = [];

            //    console.log(command);
            // console.log(`Product group: ${}`);


        }
    }

}
solve((["2",

    "!Send!:[IvanisHere]",

    "*Time@:[Itis5amAlready"]));

console.log('==========');

solve(["3",

    "go:[outside]",

    "!drive!:YourCarToACarWash",

    "!Watch!:[LordofTheRings]"]);
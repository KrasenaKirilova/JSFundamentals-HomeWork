function solve(input) {
    let text = input.shift();


    let command = input.shift().split('|');
    

    while (command[0] !== "Decode") {

        switch (command[0]) {

            case "Move": {
                let n = +command[1];

                for (let i = 1; i <= n; i++) {
                    let firstChar = text.substring(0, 1);
                    let otherChars = text.substring(1);
                    text = otherChars + firstChar;

                }

            }

                break;
            case "Insert": {
                let index = Number(command[1]);
                let char = command[2];

                text = text.substring(0, index) + char + text.substring(index);

            }
                break;
            case "ChangeAll": {
                let substr = command[1];
                let replacement = command[2];

                while (text.includes(substr)) {
                    text = text.replace(substr, replacement);
                }
            }
                break;

        }
        command = input.shift().split('|');
    }

    console.log(`The decrypted message is: ${text}`);
}


solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]);


solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
   ]);
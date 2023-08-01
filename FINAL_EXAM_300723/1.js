function solve(input) {
    let text = input.shift();
    let command = input.shift().split(' ');
    let action = command[0];

    while (action !== "Abracadabra") {

        switch (action) {
            case 'Abjuration': {
                text = text.toUpperCase();
                console.log(text);
            }
                break;

            case 'Necromancy': {
                text = text.toLowerCase();
                console.log(text);
            }

            case 'Illusion': {
                let index = Number(command[1]);
              console.log(index);
                let letter = command[2];

                if (index >= 0 && index < text.length) {
                    let chars = text.split('');
                    chars[index] = letter;
                    text = chars.join('');
                    console.log('Done!');
                } else {
                    console.log('The spell was too weak.');
                }
            }
                break;

            case 'Divination': {
                let firstText = command[1];
                let secondText = command[2];

                if (!text.includes(firstText)) {
                    break;
                } else {
                    text = text.replace(firstText, secondText);
                    console.log(text);
                }


            }
                break;

            case 'Alteration': {
                let stringToRemove = command[1];

                if (text.includes(stringToRemove)) {
                    let partToCut = text.split(stringToRemove);
                    text = partToCut.join('');
                    console.log(text);
                } else {
                    break;
                }

            }
                break;

            default: {
                if (!input.includes(action)) {
                    console.log('The spell did not work!');
                    break;
                }
            }


        }


        command = input.shift().split(' ');
        action = command[0];
    }

}

// solve((["A7ci0",

//     "Illusion 1 c",

//     "Illusion 4 o",

//     "Abjuration",

//     "Abracadabra"]));

console.log(('==========='));

solve((["TR1GG3R",

    "Necromancy",

    "Illusion 8 m",

    "Illusion 9 n",

    "Abracadabra"]));

console.log('============');
solve((["SwordMaster",

    "Target Target Target",

    "Abjuration",

    "Necromancy",

    "Alteration master",

    "Abracadabra"]));
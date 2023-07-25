function solve(input) {
    let text = input.shift();
    let command = input.shift();

    while (command !== "Reveal") {
        let tokens = command.split(':|:');

        switch (tokens[0]) {
            case "InsertSpace":
                let index = tokens[1];
                text = text.substring(0, index) + ' ' + text.substring(index);
                console.log(text);
                break;

            case "Reverse":

                let textToReverce = tokens[1];

                if (text.includes(textToReverce)) {
                    let startIndex = text.indexOf(textToReverce);
                    let endIndex = text.lastIndexOf(textToReverce) + textToReverce.length;
                    textToReverce = text.substring(startIndex, endIndex);

                    let buff = textToReverce.split('');
                    let revercedBuff = buff.reverse();

                    textToReverce = revercedBuff.join('');

                    text = text.substring(0, startIndex) + text.substring(endIndex) + textToReverce;
                    console.log(text);
                } else {
                    console.log('error');
                }
                break;

            case 'ChangeAll': {
                let charForChange = tokens[1];
                let realChar = tokens[2];

                const regex = new RegExp(charForChange, 'g');
                text = text.replace(regex, realChar);
                console.log(text);
            }
                break;

        }
        command = input.shift();
    }
    console.log(`You have a new text message: ${text}`);

}

solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);
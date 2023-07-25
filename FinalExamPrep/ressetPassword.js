function solve(input) {
    let text = input.shift();

    let currentCommand = input.shift();

    while (currentCommand !== "Done") {

        currentCommand = currentCommand.split(' ');

        switch (currentCommand[0]) {
            case 'TakeOdd': {
                text = text
                    .split('')
                    .filter((char, index) => {
                        return index % 2 !== 0;
                    })
                    .join('');
                console.log(text);
            }
                break;

            case 'Cut': {
                let index = +currentCommand[1];
                let length = +currentCommand[2];

                let substring = text.substring(index, index + length);
                text = text.replace(substring, '');
                console.log(text);
            }
                break;

            case 'Substitute': {
                let substr = currentCommand[1];
                let substitude = currentCommand[2];

                if (text.includes(substr)) {
                    text = text.replace(new RegExp(substr, 'g'), substitude);
                    console.log(text);
                    break;
                }
                console.log('Nothing to replace!');
                
                break;


            }

        }
        currentCommand = input.shift();
    }

    console.log(`Your password is: ${text}`);
}


solve((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]));
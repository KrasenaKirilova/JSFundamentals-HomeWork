function solve(input) {
    let text = input.shift();
    

    for (const line of input) {
        let command = line.split('>>>');
        let action = command[0];

        if (action !== 'Generate')

            switch (action) {
                case "Contains": {
                    let substr = command[1];

                    if (text.includes(substr)) {
                        console.log(`${text} contains ${substr}`);
                    } else {
                        console.log('Substring not found!');
                    }
                }
                    break;

                case 'Flip': {
                    let letterType = command[1];
                    let startIndex = command[2];
                    let endIndex = command[3];

                    if (startIndex >= 0 && startIndex < text.length &&
                        endIndex >= 0 && endIndex < text.length) {
                        let textToChange = text.substring(startIndex, endIndex);
                        let startText = text.substring(0, startIndex);
                        let endText = text.substring(endIndex);

                        if (letterType === 'Upper') {
                            textToChange = textToChange.toUpperCase();
                            //console.log(textToChange);
                            text = startText + textToChange + endText;
                            console.log(text);
                        }

                        if (letterType === 'Lower') {
                            textToChange = textToChange.toLowerCase();
                            //console.log(textToChange);
                            text = startText + textToChange + endText;
                            console.log(text);
                        }

                    }

                }
                    break;

                case 'Slice': {

                    let startIndex = command[1];
                    let endIndex = command[2];
                    if (startIndex >= 0 && startIndex < text.length &&
                        endIndex >= 0 && endIndex < text.length) {
                        text = text.substring(0, startIndex) + text.substring(endIndex);
                        console.log(text);
                    }

                }
                    break;
            }

    }
    console.log(`Your activation key is: ${text}`);
}

solve(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);

console.log('=================');

solve(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]);
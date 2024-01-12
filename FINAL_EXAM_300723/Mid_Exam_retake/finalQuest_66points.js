function solve(input) {
    let text = input.shift().split(' ');

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(' ');
        let action = command[0];

        if (action === "Stop") {
            break;
        }

        switch (action) {
            case 'Delete': {
                let index = Number(command[1]);
                if (index >= 0 && index < text.length) {
                    text.splice(index + 1, 1);
                }else {
                    break;
                }
                break;
            }

            case 'Swap': {
                let index1 = text.indexOf(command[1]);
                let index2 = text.indexOf(command[2]);

                if (index1 >= 0 && index1 < text.length && index2 >= 0 && index2 < text.length) {
                    [text[index1], text[index2]] = [text[index2], text[index1]];
                }else {
                    break;
                }
                break;
            }

            case 'Put': {
                let word = command[1];
                let index = Number(command[2]);

                if (index > 0 && index <= text.length) {
                    text.splice(index - 1, 0, word);
                }else if (index === text.length) {
                    text.push(word);
                } else {
                    break;
                }
                break;
            }

            case 'Replace': {
                let word1 = command[1];
                let word2 = command[2];
                let indexWord2 = text.indexOf(word2);

                if (indexWord2 >= 0 && indexWord2 < text.length) {
                    text.splice(indexWord2, 1, word1);
                } else {
                    break;
                }
                break;
            }
        }
    }

    console.log(text.join(' '));
}


solve(["This the my quest! final",
    "Put is 2",
    "Swap final quest!",
    "Delete 2",
    "Stop"]);

    solve(["Please, follow the instructions!",
    "Put You 0",
    "Delete 3",
    "Replace me you",
    "Replace follow know",
    "Stop"]);
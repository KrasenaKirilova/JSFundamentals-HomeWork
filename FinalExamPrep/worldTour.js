function solve(input) {
    let text = input.shift();
    let command = input.shift().split(':');

    while (command[0] !== 'Travel') {

        switch (command[0]) {
            case "Add Stop": {
                let index = Number(command[1]);
                let string = command[2];
                if (index >= 0 && index < text.length) {
                    let first = text.substring(0, index);
                    let second = text.substring(index);
                    text = first + string + second;

                }
                console.log(text);
            }
                break;

            case "Remove Stop": {
                let startIndex = Number(command[1]);
                let endIndex = Number(command[2]);
                if (startIndex >= 0 && startIndex < text.length &&
                    endIndex >= 0 && endIndex < text.length) {
                    text = text.substring(0, startIndex) + text.substring(endIndex + 1);

                }
                console.log(text);
            }
                break;

            case "Switch": {
                let oldStr = command[1];
                let newStr = command[2];

                if (text.includes(oldStr)) {
                    text = text.replace(oldStr, newStr);

                }
                console.log(text);
            }
                break;
        }

        command = input.shift().split(':');
    }

    console.log(`Ready for world tour! Planned stops: ${text}`);
}


solve(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);

console.log('==========');

solve(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"]);
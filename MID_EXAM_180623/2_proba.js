function solve(input) {
    let listNames = input.shift().split(', ');

    let index = 0;
    let command = input[index];
    index++;

    let count = 0;
    let lostCount = 0;
    let name1;
    let name2;
    let name3;

    while (command !== 'Report') {
        let tokens = command.split(' ');

        switch (tokens[0]) {
            case 'Blacklist':
                name1 = tokens[1];

                if (listNames.includes(name1)) {
                    let indexOfElement = listNames.indexOf(name1);
                    listNames[indexOfElement] = 'Blacklisted';
                    count++;
                    console.log(`${name1} was blacklisted.`);
                } else {
                    console.log(`${name1} was not found.`);
                }

                break;

            case 'Error':
                let errorIndex = tokens[1];
                name2 = listNames[errorIndex];

                if (count === 0 && lostCount === 0) {
                    console.log(`${name2} was lost due to an error.`);
                    lostCount++;
                }

                break;

            case 'Change':
                let changeIndex = tokens[1];
                let oldName = listNames[changeIndex];
                name3 = tokens[2];

                if (listNames.includes(oldName)) {
                    let indexOfElement = listNames.indexOf(oldName);
                    listNames[indexOfElement] = name3;
                    console.log(`${oldName} changed his username to ${name3}.`);
                } else {
                    break;
                }

                break;

            case 'Report':
                break;
        }
        command = input[index];
        index++;
    }

    console.log(`Blacklisted names: ${count}`);
    console.log(`Lost names: ${lostCount}`);
    console.log(`${name1} ${name2} ${name3}`);
}


/// НЕДОВЪРШЕНА!!!!!!!!!!!


solve(["Mike, John, Eddie",

    "Blacklist Mike",

    "Error 0",

    "Report"]);

console.log('-------------------');

solve(["Mike, John, Eddie, William", "Error 3", "Error 3", "Change 0 Mike123", "Report"]);

console.log('-------------------');

solve(["Mike, John, Eddie, William",

    "Blacklist Maya",

    "Error 1",

    "Change 4 George",

    "Report"]);

console.log('-------------------');
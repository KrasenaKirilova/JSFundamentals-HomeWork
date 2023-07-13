function solve(input) {
    let listNames = input.shift().split(',');

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
        
        let indexOfElement;
        switch (tokens[0]) {
            case "Blacklist": 
               name1 = tokens[1];
                indexOfElement = listNames.indexOf(name1);
                
                if (listNames.indexOf(name1) >= 0) {
                    tokens.shift();
                    tokens.unshift('Blacklisted');
                    // listNames[indexOfElement] = tokens[0];
                    //listNames.indexOf(name1) = tokens[0];
                    count++;
                    console.log(`${name1} was blacklisted.`);
                    // listNames
                } else {
                    console.log(`${name1} was not found.`);
                }
            
                break;
        
            case "Error": 
                let index = tokens[1];
                name2 = listNames[index];

               if (count === 0 && lostCount === 0) {
                console.log(`${name2} was lost due to an error.`);
                lostCount++;
                } 
                
            break;

            case "Change": 
                let index1 = tokens[1];
                let oldName = listNames[index1];
                name3 = tokens[2];
                indexOfElement = listNames.indexOf(oldName);
                if (indexOfElement > -1) {
                    listNames[indexOfElement] = name3;
                    console.log(`${oldName} changed his username to ${name3}.`);
                } else {
                    break;
                }
            break;


            case "Report": 
            
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
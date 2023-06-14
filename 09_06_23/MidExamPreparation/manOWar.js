function manOWar(input) {
    let piratesAsString = input.shift().split('>');
    let pirates = piratesAsString.map(x => Number(x));
    console.log(pirates);
    let warshipAsString = input.shift().split('>');
    let warship = warshipAsString.map(x => Number(x));
    console.log(warship);
    let health = Number(input[0]);
    let index = 1;
    let command = input[index];
    index++;

    let pirateShipSum = 0;
    let warshipSum = 0;


    while (command !== 'Retire') {
        let tokens = command.split(' ');
        let currentCommand = tokens[0];
        let indexItem = Number(tokens[1]);
        let damage;

        switch (currentCommand) {
            
            case "Fire": 
            damage = Number(tokens[2]);
                if (indexItem >= 0 && indexItem < warship.length) {
                // tokens[indexItem] -= damage;
                // console.log(tokens[indexItem]);
                    if (health <= 0) {
                        console.log('You won! The enemy ship has sunken');
                    }
            } 
            break;

            case "Defend": 
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            damage = Number(tokens[3]);
             if(startIndex >= 0 && endIndex>=0 && startIndex < pirates.length && endIndex < pirates.length) {
                health = (tokens[startIndex] - damage) + (tokens[endIndex] - damage);
             } if (health <= 0) {
                console.log('You lost! The pirate ship has sunken.');
            }
            break;

            case "Repair": 
             
            
            break;
            case "Status": break;
        }
        

        command = input[index];
        index++;


    }
console.log(`Pirate ship status: ${pirateShipSum}`);
console.log(`Warship status: ${warshipSum}`);
}


manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18", "70",
    "Fire 2 11", "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]);
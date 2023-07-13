function manOWar(input) {
    let pirateAsString = input.shift().split('>');
    let pirateShip = pirateAsString.map(x => Number(x));

    let warShipAsString = input.shift().split('>');
    let warShip = warShipAsString.map(x => Number(x));

    let MaxHealth = Number(input.shift());

    for (let i = 0; i < input.length; i++) {

        let tokens = input[i].split(' ');
        let command = tokens[0];
        let value = tokens.slice(1).map(x => Number(x));

        switch (command) {
            case "Fire": fire(warShip, value[0], value[1]); break;
            case "Defend": defend(pirateShip, value[0], value[1], value[2]); break;
            case "Repair": repair(pirateShip, value[0], value[1], MaxHealth); break;
            case "Status": status(pirateShip, MaxHealth); break;
            case "Retire": {
                console.log(`Pirate ship status: ${pirateShip.reduce((a, c) => a + c, 0)}`);
                console.log(`Warship status: ${warShip.reduce((a, c) => a + c, 0)}`);
                return;
            }
        }
        if (isShipDeath(warShip)) {
            console.log("You won! The enemy ship has sunken.");
            break;
        }
        if (isShipDeath(pirateShip)) {
            console.log("You lost! The pirate ship has sunken.");
            break
        }
    }


    function isShipDeath(ship) {
        let deadSections = ship.filter(x => x <= 0);
        return deadSections.length > 0;
    }

    function fire(warShip, index, damage) {
        if (index >= 0 && index < warShip.length) {
            warShip[index] -= damage;
        }
    }

    function defend(pirateShip, startIndex, endIndex, damage) {
        if (startIndex >= 0 && startIndex < pirateShip.length && endIndex >= 0 && endIndex < pirateShip.length) {
            for (let i = startIndex; i <= endIndex; i++)
                pirateShip[i] -= damage;
        }
    }

    function repair(ship, index, heal, MaxHealth) {
        if (index >= 0 && index < ship.length) {
            let missingHealth = MaxHealth - ship[index];
            ship[index] += Math.min(missingHealth, heal);
        }
    }

    function status(ship, MaxHealth) {
        let damageSections = ship.filter(x => x < (MaxHealth * 0.2));
        console.log(`${damageSections.length} sections need repair.`);

    }
}



manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18", "70",
    "Fire 2 11", "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"]);


    console.log('================');

    manOWar(["2>3>4>5>2",

    "6>7>8>9>10>11",
    
    "20",
    
    "Status",
    
    "Fire 2 3",
    
    "Defend 0 4 11",
    
    "Repair 3 18",
    
    "Retire"]);
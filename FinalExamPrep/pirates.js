function solve(input) {
    let target = [];


    for (const line of input) {

        if (line === "Sail") {
            break;
        }

        let [city, population, gold] = line.split('||');
        population = Number(population);
        gold = Number(gold);

        let currentSity = target.find((x) => x.city === city);

        if (!currentSity) {
            let newTarget = {
                city,
                population: population,
                gold: gold
            }
            target.push(newTarget);
        } else {
            currentSity.population += population;
            currentSity.gold += gold;
        }
    }
    let index = input.indexOf('Sail') + 1;
    let command = input[index];
    index++;

    while (command !== 'End') {
        let tokens = command.split('=>');
        let action = tokens[0];
        let town = tokens[1];
        let population;
        let gold;
        let indexCurrentTown;
        let currentTown = target.find((x, i) => {
            if (x.city === town) {
                indexCurrentTown = i;
                return true;
            }
            return false;
        });


        switch (action) {
            case "Plunder": {
                if (!currentTown) {
                    break;
                }

                population = +tokens[2];
                gold = +tokens[3];
                currentTown.population -= population;
                currentTown.gold -= gold;
                console.log(`${town} plundered! ${gold} gold stolen, ${population} citizens killed.`);

                if (currentTown.population <= 0 || currentTown.gold <= 0) {
                    target.splice(indexCurrentTown, 1);
                    console.log(`${town} has been wiped off the map!`);
                }

                break;

            }
            case 'Prosper': {
                if (!currentTown) {
                    break;
                }

                let gold = +tokens[2];
                if (gold < 0) {
                    console.log(`Gold added cannot be a negative number!`);
                    break;
                }
                currentTown.gold += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${currentTown.gold} gold.`);
                break;
            }

        }
        command = input[index];
        index++;

    }
if (target.length > 0) {
    console.log(`Ahoy, Captain! There are ${target.length} wealthy settlements to go to:`);

    for (const el of target) {
        console.log(`${el.city} -> Population: ${el.population} citizens, Gold: ${el.gold} kg`);
        
    }
} else {
    console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
}
}


solve((["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]));
console.log('=============');
solve((["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"]));
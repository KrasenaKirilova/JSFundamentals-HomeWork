function solve(input) {

    let nums = Number(input.shift());
    let heroes = [];

    for (let i = 0; i < nums; i++) {

        let command = input[i];

        if (command === "End") {
            break;
        }

        let [heroName, hitPoints, manaPoints] = input.shift().split(' ');
        hitPoints = Number(hitPoints);
        manaPoints = Number(manaPoints);

        let currentHero = heroes.find((x) => x.heroName === heroName);

        if (!currentHero) {
            let newHero = {
                heroName,
                hitPoints: hitPoints,
                manaPoints: manaPoints,
            }
            heroes.push(newHero);
        }
    }
    //console.log(heroes);
    command = input.shift();


    while (command !== "End") {

        let tokens = command.split(' - ');
        let action = tokens[0];
        let name = tokens[1];
        // console.log(action, name);



        switch (action) {
            case "Heal": {

            }

                break;

            case "Recharge": {

            }

                break;
            case "TakeDamage": {

            }

                break;
            case "CastSpell": {

                let manaPointsNeeded = Number(tokens[2]);
                let spellName = tokens[3];

                for (const hero of heroes) {
                    let currentHero = heroes.find((x) => x.heroName === heroName); 

                    console.log(currentHero.hitPoints);

                    // if (heroes[heroName] === name) {
                    //     heroes[heroName].manaPoints -= manaPointsNeeded;
                    //     console.log(manaPoints);
                    // }
                }


            }

                break;
        }
        command = input.shift();
    }
}


solve([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
]);
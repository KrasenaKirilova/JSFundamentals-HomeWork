function solve(input) {
    let nums = Number(input.shift());
    let heroes = new Map();


    for (let i = 0; i < nums; i++) {

        let [hero, hp, mp] = input.shift().split(' ');

        heroes.set(hero, []);
        heroes.get(hero).push(Number(hp));
        heroes.get(hero).push(Number(mp));

    }

    let command = input.shift().split(' - ');

    let action = command[0];


    while (action !== 'End') {
        let heroName = command[1];
        // console.log(heroName);
        switch (action) {

            case 'CastSpell': {
                let neededMP = Number(command[2]);
                let spellName = command[3];
                // console.log(spellName, neededHP);

                if (neededMP <= heroes.get(heroName)[1]) {
                    heroes.get(heroName)[1] -= neededMP;
                    console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes.get(heroName)[1]} MP!`);
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                }
            }
                break;

            case "TakeDamage": {
                let damage = Number(command[2]);
                let attacker = command[3];

                heroes.get(heroName)[0] -= damage;

                if (heroes.get(heroName)[0] > 0) {
                    console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes.get(heroName)[0]} HP left!`);
                } else if (heroes.get(heroName)[0] <= 0) {
                    heroes.delete(heroName);
                    console.log(`${heroName} has been killed by ${attacker}!`);
                }
            }
                break;
            case "Recharge": {
                let rechargeAmount = Number(command[2]);
                let sum = heroes.get(heroName)[1] + rechargeAmount;

                if (sum > 200) {
                    heroes.get(heroName)[1] = 200;
                    sum -= 200;
                    rechargeAmount -= sum;
                    console.log(`${heroName} recharged for ${rechargeAmount} MP!`);
                } else {
                    heroes.get(heroName)[1] += rechargeAmount;
                    console.log(`${heroName} recharged for ${rechargeAmount} MP!`);
                }
            }
                break;
            case "Heal": {
                let healAmount = Number(command[2]);
                let sum = heroes.get(heroName)[0] + healAmount;

                if (sum > 100) {
                    heroes.get(heroName)[0] = 100;
                    sum -= 100;
                    healAmount -= sum;
                    console.log(`${heroName} healed for ${healAmount} HP!`);
                } else {
                    heroes.get(heroName)[0] += healAmount;
                    console.log(`${heroName} healed for ${healAmount} HP!`);
                }
            }
                break;
        }

        command = input.shift().split(' - ');
        action = command[0];
    }



    for (const [hero, heroInfo] of heroes) {

        console.log(`${hero}`);
         console.log(`  HP: ${heroInfo[0]}`); 
         console.log(`  MP: ${heroInfo[1]}`);

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
    "End"]);

console.log('=================');

solve([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"]);
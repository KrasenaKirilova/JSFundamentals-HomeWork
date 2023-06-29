function solve(input) {

    let result = [];

    for (const line of input) {

        let [name, level, items] = line.split(' / ');

        let hero = {
            name: name,
            level: Number(level),
            items: items
        };

        result.push(hero);
    }
    result.sort((a, b) => a.level - b.level);

    for (const heroObj of result) {
        console.log(`Hero: ${heroObj.name}`);
        console.log(`level => ${heroObj.level}`);
        console.log(`items => ${heroObj.items}`);
    }
    
}


solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
function solve(input) {
    let messageCount = Number(input.shift());
    const paternSTAR = /[STAR]/ig;
    let charCodesLetters = [];
    let newArrLetters = [];
    let newArr = [];

    for (let j = 0; j < input.length; j++) {
        let starCount = 0;
        let currentEl = input[j];
        let letters = Array.from(currentEl);

        for (let i = 0; i < letters.length; i++) {

            let char = letters[i];

            if (char.match(paternSTAR)) {
                starCount++;
                continue;
            }
        }

        charCodesLetters = letters.map(char => char.charCodeAt(0) - starCount);
        newArrLetters = charCodesLetters.map(code => String.fromCharCode(code)).join('');
        newArr.push(newArrLetters);
    }
    const pattern = /@(?<planet>[A-Z][a-z]+)[^-@!>\W]*:(?<population>\d+)[^-@!>\d]*!(?<attack>[AD])![^-@!>]*->(?<soldiers>\d+)/;
    //const pattern = /@(?<planet>\w+):(?<population>\d+)!(?<attack>[A-Z]{1})!->(?<soldiers>\d+)/;
    let planet = '';
    let population = 0;
    let attackType = '';
    let soldiers = 0;
    let attackCounter = 0;
    let destroyCounter = 0;
    let attackedPlanets = [];
    let destroyedPlanets = [];


    for (const element of newArr) {
        let result = element.match(pattern);

        if (result) {
            planet = result.groups.planet;
            population = result.groups.population;
            attackType = result.groups.attack;
            soldiers = result.groups.soldiers;

            if (attackType === 'A') {
                attackCounter++;
                attackedPlanets.push(planet);

            } else if (attackType === "D") {
                destroyCounter++;
                destroyedPlanets.push(planet);
            }
        }



    }
    console.log(`Attacked planets: ${attackCounter}`);
    attackedPlanets.sort((a, b) => a.localeCompare(b));
    for (const planet of attackedPlanets) {
        console.log(`-> ${planet}`);
    }

    console.log(`Destroyed planets: ${destroyCounter}`);
    destroyedPlanets.sort((a, b) => a.localeCompare(b));
    for (const planet of destroyedPlanets) {

        console.log(`-> ${planet}`);
    }
}




solve(['2',
    'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR'
]);

console.log('=========');

solve(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']);
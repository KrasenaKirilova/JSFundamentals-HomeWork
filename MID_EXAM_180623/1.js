function solve(input) {
    let totalExperience = input.shift();
    let count = 0;
    let battle = input.shift();
    let sum = 0;


    for (let i = 0; i < battle; i++) {
        let currentBattle = input[i];

        sum += currentBattle;
        count++;

        if (count % 3 === 0) {
            sum += currentBattle * 0.15;
        }

        if (count % 5 === 0) {
            sum -= currentBattle * 0.1;
        }
        if (sum >= totalExperience) {
            break;
        }
    }

    if (sum >= totalExperience) {
        console.log(`Player successfully collected his needed experience for ${count} battles.`);
    } else {
        console.log(`Player was not able to collect the needed experience, ${(totalExperience - sum).toFixed(2)} more needed.`);
    }
}



solve([500,
    5,
    50,
    100,
    200,
    100,
    30]);

console.log('-------------------');

solve([500,
    5,
    50,
    100,
    200,
    100,
    20]);

console.log('-------------------');

solve([400,
    5,
    50,
    100,
    200,
    100,
    20]);

console.log('-------------------');
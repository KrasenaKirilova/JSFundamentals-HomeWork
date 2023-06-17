function counterStrike(input) {
    let initialEnergy = Number(input.shift());
    let currentBattle = input.shift();
    let battleCount = 0;

    while (currentBattle !== "End of battle") {
        if (initialEnergy - battleCount >= 0) {
            battleCount++;
            initialEnergy -= currentBattle;
        
            
            if (battleCount !== 0 && battleCount % 3 === 0) {
                initialEnergy += battleCount;
            }

        } else {
            console.log(`Not enough energy! Game ends with ${battleCount} won battles and ${initialEnergy} energy`);
            return;
        }

        currentBattle = input.shift();

    }
    console.log(`Won battles: ${battleCount}. Energy left: ${initialEnergy}`);
}

counterStrike((["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"])
);

console.log('======================');


counterStrike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"]);

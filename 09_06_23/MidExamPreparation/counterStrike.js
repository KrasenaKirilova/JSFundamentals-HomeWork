function counterStrike(input) {
    let initialEnergy = Number(input.shift());
    let battleCount = 0;
    

        for (let i = 0; i < input.length; i++) {
            let currentBattle = input[i];
            if (currentBattle !== 'end of battle') {
                if (initialEnergy > 0) {

                    initialEnergy -= currentBattle;
                    battleCount++;

                    if (battleCount % 3 === 0) {
                        initialEnergy += battleCount;
                    }
                } else {
                    console.log(`Not enough energy! Game ends with ${battleCount} won battles and ${initialEnergy} energy`);
                   
                }
                currentBattle = input[i];
                
            } 
        //     if (currentBattle === "end of battle") {

        //     console.log(`Won battles: {count}. Energy left: {energy}`);
            
        // }
        }
        
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


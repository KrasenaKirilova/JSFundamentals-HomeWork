function counterStrike(input) {
    let initialEnergy = Number(input.shift());
    let battleCount = 0;
    // let index = 0;
    // let command = input[index];
    // index++;


    //  console.log(typeof currentBattle);
    // while (command !== "end of battle") {

        for (let i = 0; i < input.length; i++) {
            let currentBattle = Number(input[i]);
            if (initialEnergy > 0) {


                initialEnergy -= currentBattle;
                battleCount++;

                if (battleCount % 3 === 0) {
                    initialEnergy += battleCount;
                }
            } else {
                console.log(`Not enough energy! Game ends with ${battleCount} won battles and ${initialEnergy} energy`);
                break;
            }

            if (currentBattle === "end of battle") {

                console.log(`Won battles: {count}. Energy left: {energy}`);
                break;
            }

        }
    //     command = input[index];
    //     index++;
    // }
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


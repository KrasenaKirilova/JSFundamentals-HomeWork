function treasureHunt(input) {
    let treasures = input.shift().split('|');

    for (let index = 0; index < input.length; index++) {
        let tokens = input[index].split(' ');
        let command = tokens.shift();


        switch (command) {
            case "Loot": loot(treasures, tokens); break;
            case "Drop": drop(tokens, treasures); break;
            case "Steal": steal(tokens, treasures); break;
            case "Yohoho!": {
                let sum = 0;
                let average = 0;
                for (let j = 0; j < treasures.length; j++) {
                    let elementLength = treasures[j].length;
                    sum += elementLength;
                    average++;
                }
                if (sum === 0) {
                    console.log('Failed treasure hunt.');
                } else {
                    console.log(`Average treasure gain: ${(sum / average).toFixed(2)} pirate credits.`);
                }   
            }
                break;
        }

    }

    function loot(treasures, tokens) {
        for (let token of tokens) {
            if (!treasures.includes(token)) {
                treasures.unshift(token);
            }
        }
    }

    function drop(tokens, treasures) {
        let index = Number(tokens[0]);
        if (index >=0 && index < treasures.length) {
            let element = treasures.splice(index, 1);
            treasures.push(element.toString());
        }
    }
    function steal(tokens, treasures) {
        let counter = Number(tokens[0]);
        let stolenElements = treasures.splice(-counter);
        console.log(stolenElements.join(', '));
    }
}


treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",

    "Loot Wood Gold Coins",

    "Loot Silver Pistol",

    "Drop 3",

    "Steal 3",

    "Yohoho!"]);

console.log('====================');

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1", "Drop 1",
    "Steal 6",
    "Yohoho!"]);
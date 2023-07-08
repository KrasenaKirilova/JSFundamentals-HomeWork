function heartDelivery (userInput){
    let houses = userInput.shift().split('@').map(Number); 
    let cupidIndex = 0; 

    while (userInput[0] != 'Love!') {
        let tokens = userInput.shift().split(' '); 
        let jumpRange = Number(tokens[1]); 

        cupidIndex += jumpRange; 

        if(cupidIndex >= houses.length) {
            cupidIndex = 0;
        } 

        if (houses[cupidIndex] == 0){
            console.log(`Place ${cupidIndex} already had Valentine's day.`);
        } else {
            houses[cupidIndex] -= 2; 
            if (houses[cupidIndex] == 0){
                console.log(`Place ${cupidIndex} has Valentine's day.`);
            }
        }
    } 

    let missed = 0; 
    for (let currentHouse of houses){
        if (currentHouse > 0){
            missed++;
        }
    } 
    console.log(`Cupid's last position was ${cupidIndex}.`);
    if(missed > 0){
        console.log(`Cupid has failed ${missed} places.`);
    } else {
        console.log(`Mission was successful.`);
    }
}

heartDelivery(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"]);

console.log('==============');

heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"]);

console.log('==============');

heartDelivery(["4@2@4@2",
    "Jump 1",
    "Jump 2",
    "Jump 1",
    "Jump 2",
    "Jump 2",
    "Jump 2",
    "Love!"]);

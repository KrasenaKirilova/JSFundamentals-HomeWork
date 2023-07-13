function heartDelivery(input) {
    let houses = input.shift().split('@');
    let command = input.shift();
    let total = 0;
   

        while (command !=='Love!') {
            let result = command.split(' ');
            total += Number(result[1]);
            
            
            if (total > houses.length - 1) {
                total = 0;
            }

            if (houses[total] === 0) {
                console.log(`Place ${total} already had Valentine's day.`);
            } else {
                houses[total] = houses[total] - 2;

                if (houses[total] ===0) {
                    console.log(`Place ${total} has Valentine's day.`);
                }
            }
            command = input.shift();
         }

    console.log(`Cupid's last position was ${total}.`);
         let resultArr = [];
         let resultFlag = true;

         houses.forEach(element => {
            if(element !== 0){
            resultFlag = false;
            resultArr.push(element);
         }
        });

        if (resultFlag) {
            console.log('Mission was succesful');
        } else {
            console.log(`Cupid has failed ${resultArr.length} places.`);
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

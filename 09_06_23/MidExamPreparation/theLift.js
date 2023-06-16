function theLift(input) {
    let people = Number(input.shift());
    let vagons = input.shift().split(' ').map(Number);

    for (let i = 0; i < vagons.length; i++) {
        let currentVagon = vagons[i];

        for (let j = currentVagon; j < 4; j++) {
            currentVagon++;
            people--;
            vagons.splice(i, 1, currentVagon);
            
            if (people === 0) {
                console.log('The lift has empty spots!');
                console.log(vagons.join(' '));
                break;
            } 
            
        }
        if (people > 0 && vagons === 0) {
            console.log(`There isn't enough space! ${people} people in a queue!`);
            console.log(vagons.join(' '));
            break;
        } 

    }

}

// theLift([
//     "15",
//     "0 0 0 0 0"
// ]
// );

console.log('==============');

theLift(['20', '0 2 0']);
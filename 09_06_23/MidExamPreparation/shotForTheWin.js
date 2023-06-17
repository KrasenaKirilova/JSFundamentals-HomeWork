function shotForWin(input) {
    let targets = input.shift().split(' ').map(Number);
    console.log(targets);
    input.pop();
    let shots = input.map(Number);
    console.log(shots);


    for (let i = 0; i < input.length; i++) {
        let currentIndexOfShot = input[i];
        let indexOfTarget = currentIndexOfShot;
        let currentTarget = targets[indexOfTarget];
           

        if(indexOfTarget > 0 && indexOfTarget < targets.length) {

            
        

        } else {
            continue;
        }

    }
    


    


   
        

    



}

shotForWin(["24 50 36 70",

    "0",

    "4",

    "3",

    "1",

    "End"]);

console.log('==============');

shotForWin(["30 30 12 60 54 66",

    "5",

    "2",

    "4",

    "0",

    "End"]);
function shotForWin(input) {
    let targets = input.shift().split(' ').map(Number);
    input.pop();
    let shots = input.map(Number);
    let shotCount = 0;
   
    for (let i = 0; i < shots.length; i++) {
        let currentShot = shots[i];
        let currentTarget = targets[currentShot];

        if (currentTarget > -1) {
        targets[currentShot] = -1;
        shotCount++;
           
            for (let j = 0; j < targets.length; j++) {
               
                if (targets[j] > -1 ) {
                    if (targets[j] > currentTarget) {
                        targets[j] -= currentTarget;     
                    } else {
                        targets[j] += currentTarget;
                    }
                }  
            }
        }
    }
    console.log(`Shot targets: ${shotCount} -> ${targets.join(' ')}`);
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
function spaceTravel(data) {
    let travelRoute = data.shift().split('||');
    let fuel = Number(data.shift());
    let ammo = Number(data.shift());
    let isStop = false;
 
    for (let i = 0; i < travelRoute.length; i++) {
        let tokens = travelRoute[i].split(' ');
        let command = tokens[0];
        let value = Number(tokens[1]);
 
        switch (command) {
            case 'Travel':
                let lightYears = value;
                if (fuel >= lightYears) {
                    fuel -= lightYears;
                    console.log(`The spaceship travelled ${lightYears} light-years.`);
                } else {
                    console.log('Mission failed.');
                    isStop = true;
                    break;
                }
                break;
            case 'Enemy':
                let enemysArmour = value;
                if (ammo >= enemysArmour) {
                    ammo -= enemysArmour;
                    console.log(`An enemy with ${enemysArmour} armour is defeated.`);
                } else {
                    if (fuel > (enemysArmour * 2)) { // може и да е >= 
                        fuel -= (enemysArmour * 2);
                        console.log(`An enemy with ${enemysArmour} armour is outmaneuvered.`);
                    } else {
                        console.log('Mission failed.');
                        isStop = true;
                        break;
                    }
                }
                break;
            case 'Repair':
                let adding = value;
                fuel += adding;
                ammo += (adding * 2);
                console.log(`Ammunitions added: ${(adding * 2)}.`);
                console.log(`Fuel added: ${adding}.`);
                break;
            case 'Titan':
                console.log(`You have reached Titan, all passengers are safe.`);
                isStop - true;
                break;
        }
 
        if (isStop) {
            break;
        }
    }
}
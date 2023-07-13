function muOnline(input) {

    let rooms = input.split('|');
    let health = 100;
    let bitcoins = 0;

    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i];
        let action = room.split(' ');
        let command = action[0];
        let value = Number(action[1]);

        if (command === 'potion') {
            let missingHealth = 100 - health;
            let restoredHealth = Math.min(missingHealth, value);
            health += restoredHealth;

            console.log(`You healed for ${restoredHealth} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (command === 'chest') {
            bitcoins += value;
            console.log(`You found ${value} bitcoins.`);
        } else {
            health -= value;

            if (health <= 0) {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i + 1} `);
                return;
            }
            console.log(`You slayed ${command}.`);
        }
    }

    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}


// muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
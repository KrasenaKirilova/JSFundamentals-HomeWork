function solve(input) {
    let calendar = {};

    for (const line of input) {
        let [day, name] = line.split(' ');
        if (!calendar.hasOwnProperty(day)) {
            console.log(`Scheduled for ${day}`);
            calendar[day] = name;
        } else {
            
            console.log(`Conflict on ${day}!`);
        }
    }

    for (const key in calendar) {
            console.log(`${key} -> ${calendar[key]}`);
        }
    }
    


solve(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']);
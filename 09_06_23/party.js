function party(guests) {

    let partyList = [];

    for (const guest of guests) {

        let details = guest.split(' ');

        let guestName = details[0];
        if (details.includes('not')) {

            if (partyList.includes(guestName)) {
                let guestNameIndex = partyList.indexOf(guestName);

                if (guestNameIndex !== -1) {
                    partyList.splice(guestNameIndex, 1);
                }
            } else {
                console.log(`${guestName} is not in the list!`);
            }
        } else {
            if (partyList.includes(guestName)) {
                console.log(`${guestName} is already in the list!`);
            } else {
                partyList.push(guestName); 
                }

        }

    }

partyList.forEach(guest => console.log(guest));
}

party(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']);
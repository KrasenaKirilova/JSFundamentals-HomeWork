function guineaPig(input) {
    let kilosOfFood = Number(input[0]);
    let kilosOfHay = Number(input[1]);
    let kilosOfCover = Number(input[2]);
    let puppyKilos = Number(input[3]);

    for (let days = 1; days <= 30; days++) {
        kilosOfFood = kilosOfFood - 0.3;

        if (days % 2 === 0) {
            kilosOfHay -= kilosOfFood * 0.05;
        }
        if (days % 3 === 0) {
            kilosOfCover -= puppyKilos / 3;
        }

    }

    if (kilosOfFood <= 0 || kilosOfHay <= 0 || kilosOfCover <= 0) {
        console.log(`Merry must go to the pet store!`);

    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${kilosOfFood.toFixed(2)}, Hay: ${kilosOfHay.toFixed(2)}, Cover: ${kilosOfCover.toFixed(2)}.`);
    }

}


guineaPig(["10", "5", "5.2", "1"]);
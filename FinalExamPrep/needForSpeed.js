function solve(input) {
    let nums = Number(input.shift());
    let colection = new Map();


    for (let i = 0; i < nums; i++) {
        let [car, mileage, fuel] = input.shift().split('|');

        colection.set(car, []);
        colection.get(car).push(Number(mileage));
        colection.get(car).push(Number(fuel));
    }

    let command = input.shift().split(' : ');
    let action = command[0];

    while (action !== 'Stop') {
        let currentCar = command[1];

        switch (action) {

            case 'Drive': {

                let distance = Number(command[2]);
                let neededFuel = Number(command[3]);

                if (neededFuel <= colection.get(currentCar)[1]) {
                    colection.get(currentCar)[0] += distance;
                    colection.get(currentCar)[1] -= neededFuel;
                    console.log(`${currentCar} driven for ${distance} kilometers. ${neededFuel} liters of fuel consumed.`);
                } else {
                    console.log('Not enough fuel to make that ride');
                }

                if (colection.get(currentCar)[0] >= 100000) {
                    colection.delete(currentCar);
                    console.log(`Time to sell the ${currentCar}!`);
                }
            }

                break;

            case 'Refuel': {
                let refuelLitters = Number(command[2]);
                let sum = refuelLitters + colection.get(currentCar)[1];

                // if (sum > 75) {
                //     result.get(givenCar)[1] = 75;
                //     sum -= 75;
                //     console.log(`${givenCar} refueled with ${givenFuel - sum} liters`);
                // } else {
                //     result.get(givenCar)[1] = sum;
                //     console.log(`${givenCar} refueled with ${givenFuel} liters`);
                // }

                if (sum > 75) {
                    colection.get(currentCar)[1] = 75;
                    sum -= 75;
                    console.log(`${currentCar} refueled with ${refuelLitters - sum} liters`);
                } else {
                    colection.get(currentCar)[1] = sum;
                    console.log(`${currentCar} refueled with ${refuelLitters} liters`);
                }

            }

                break;

            case 'Revert': {
                let revertMil = Number(command[2]);

                colection.get(currentCar)[0] -= revertMil;


                if (colection.get(currentCar)[0] < 10000) {
                    colection.get(currentCar)[0] = 10000;
                } else {
                    console.log(`${currentCar} mileage decreased by ${revertMil} kilometers`);
                }
            }

                break;
        }

        command = input.shift().split(' : ');
        action = command[0];
    }


    for (const [car, carInfo] of colection) {

        console.log(`${car} -> Mileage: ${carInfo[0]} kms, Fuel in the tank: ${carInfo[1]} lt.`);

    }
}

solve([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]
);
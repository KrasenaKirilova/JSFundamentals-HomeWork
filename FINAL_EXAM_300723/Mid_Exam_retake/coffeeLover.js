function solve(input) {
    let allCoffees = input.shift().split(' ');

    let nums = Number(input.shift());




    for (let i = 1; i <= nums; i++) {
        let command = input.shift().split(' ');
        console.log(command);
        let action = command[0];

        switch (action) {
            case "Include": {
                let typeOfCoffee = command[1];
                allCoffees.push(typeOfCoffee);
                console.log(allCoffees);
            }

                break;
            case "Remove": {
                let typeOfRemove = command[1];
                let coffeeNum = Number(command[2]);

                if (coffeeNum < 0 || coffeeNum > command.length) {
                    break;
                } else {
                    if (typeOfRemove === "first") {
                        allCoffees.splice(coffeeNum - 1, 1);
                        console.log(allCoffees);
                    }
                }
            }
                break;
                case "Prefer": {
                    let firstIndex = Number(command[1]);
                    let secondIndex = Number(command[2]);

                    if (firstIndex < 0 && secondIndex > command.length) {
                        break;
                    } else {
                        let coffe1 = allCoffees[firstIndex];
                        let coffe2 = allCoffees[secondIndex];
                       // allCoffees.slice(coffe2);
                        
                    }
                }


        }


    }
}



solve(["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee", "5", "Include OrdinaryCoffee", "Remove first 1", "Prefer 0 1", "Prefer 3 1", "Reverse"]);
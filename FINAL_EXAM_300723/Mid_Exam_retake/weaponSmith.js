function solve(input) {
    let weapons = input.shift().split('|');


    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(' ');
        let action = command[0];

        if (action === "Done") {
            break;
        }

        switch (action) {
            case 'Add': {
                let particle = command[1];
                let index = Number(command[2]);

                if (index >= 0 && index < weapons.length) {
                    weapons.splice(index, 0, particle);
                } else {
                    break;
                }
                break;
            }

            case 'Remove': {
                let index = Number(command[1]);
                if (index >= 0 && index < weapons.length) {
                    weapons.splice(index, 1);
                } else {
                    break;
                }
                break;
            }

            case 'Check': {
                let indexType = command[1];
                let evenArr = [];
                let oddArr = [];
                if (indexType === "Even") {
                    for (i = 0; i < weapons.length; i++) {

                        if (i % 2 === 0) {
                            evenArr.push(weapons[i]);
                        }

                    }
                    console.log(evenArr.join(' '));
                }

                if (indexType === "Odd") {
                    for (i = 0; i < weapons.length; i++) {

                        if (i % 2 !== 0) {
                            oddArr.push(weapons[i]);

                        }

                    }
                    console.log(oddArr.join(' '));
                }


                break;
            }
        }
    }

    console.log(`You crafted ${weapons.join('')}!`);
}



solve(["pa|Do|ha|mm|er", "Remove 0",
    "Add om 1", "Check Even",
    "Done"]);


solve(["As|hb|ri|ng|er",
    "Remove 10",
    "Add lo 5",
    "Check Odd",
    "Done"]); 
function train(input) {
let wagons = input[0].split(' ').map(Number);
let wagonCapacity = Number(input[1]);

for (let i = 2; i < input.length; i++) {
    let command = input[i].split(' ');

    if (command[0] === 'Add') {
        wagons.push(Number(command[1]));
    } else {
        let passengers = Number(command[0]);

        for (j = 0; j < wagons.length; j ++) {

            if (wagonCapacity - wagons[j] >= passengers) {
                wagons[j] += passengers;
                break;

            }
        }
    }
}
console.log(wagons.join(' '));
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])
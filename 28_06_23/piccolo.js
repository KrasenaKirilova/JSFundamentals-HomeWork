function solve(input) {
    let parking = new Set();

    for (const line of input) {
        let [direction, carNumber] = line.split(', ');

        if (direction === "IN") {
            parking.add(carNumber);
            
        }
        if (direction === "OUT") {
            parking.delete(carNumber);
            
        }
        if (parking.size === 0){
            console.log(`Parking Lot is Empty`);
        }
    }
let sorted = Array.from(parking);
sorted.sort((a, b) => a.localeCompare(b));
sorted.forEach((value) => {
    console.log(`${value}`);
});
    
}


// solve(['IN, CA2844AA',
// 'IN, CA1234TA',
// 'OUT, CA2844AA',
// 'IN, CA9999TT',
// 'IN, CA2866HI',
// 'OUT, CA1234TA',
// 'IN, CA2844AA',
// 'OUT, CA2866HI',
// 'IN, CA9876HH',
// 'IN, CA2822UU']);


solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);
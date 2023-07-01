function solve(input) {
    let addressBook = {};

    for (const line of input) {
        let [name, address] = line.split(':');
        addressBook[name] = address;

    }
    let sorted = Object.entries(addressBook).sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));
    
    for (let [key, value] of sorted) {
        console.log(`${key} -> ${value}`);
    }
 
}

solve(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']);
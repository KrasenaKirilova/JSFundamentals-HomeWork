function solve(input) {

    let phoneBook = {};

    for (const line of input) {
        let [name, phone] = line.split(' ');
        phoneBook[name] = phone;
    }
    for (const key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
};



solve(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344'])
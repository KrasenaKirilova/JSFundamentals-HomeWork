function solve(namesArr) {

    for (const name of namesArr) {
        console.log(`Name: ${name} -- Personal Number: ${name.length}`);
    }

    // let obj = {};

    // for (const name of namesArr) {
    //    obj[name] = name.length;  
    // }
 
    // for (const name in obj) {
    //    console.log(`Name: ${name} -- Personal Number: ${obj[name]}`);
    // }
}

// И двата варианта са валидни :)

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);

    console.log('==================');


    solve([
        'Samuel Jackson',
        'Will Smith',
        'Bruce Willis',
        'Tom Holland'
        ]);
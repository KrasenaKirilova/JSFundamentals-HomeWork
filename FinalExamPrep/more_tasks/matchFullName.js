function solve(input) {
    let pattern = /\b[A-Z][a-z]{2,} [A-Z][a-z]{2,}\b/g;
    let names = [];

    let valid = null;


    while ((valid = pattern.exec(input)) !== null) {
        names.push(valid);
    }
    console.log(`${names.join(' ')}`);
}


solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");
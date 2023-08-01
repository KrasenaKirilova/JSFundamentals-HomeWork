function solve(input) {
    let first = input.shift().charCodeAt();
    let second = input.shift().charCodeAt();
    let text = input.shift();
    let sum = 0;


    for (let i = 0; i < text.length; i++) {
        let currentChar = text.charCodeAt(i);


        if ((currentChar > Math.min(first, second)) && (currentChar < Math.max(first, second))) {
            sum += currentChar;
        }

    }
    console.log(sum);
}






solve(['.',
    '@',
    'dsg12gr5653feee5']);

solve(['a',
    '1',
    'jfe392$#@j24ui9ne#@$']);

solve(['?',
    'E',
    '@ABCEF']);
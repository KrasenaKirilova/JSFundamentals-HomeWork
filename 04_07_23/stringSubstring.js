function solve(word, text) {

    let textArray = text.split(' ');
    let isFound = false;

    for (const element of textArray) {

        if (element.toLowerCase() === word.toLowerCase()) {
            isFound = true;
            console.log(word);
            break;
        } 
    }
    if (!isFound) {
        console.log(`${word} not found!`);
        
    }
}






solve('javascript',

    'JavaScript is the best programming language');

solve('python',

    'JavaScript is the best programming language')
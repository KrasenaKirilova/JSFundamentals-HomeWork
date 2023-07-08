function solve(text, word) {
    let newText = text.split(' ');
    let counter = 0;

    for (const element of newText) { {
        
        if(element === word) {
            counter++;
        }
    }
       
    }
    console.log(counter);
} 


solve('softuni is great place for learning new programming languages','softuni');
solve('This is a word and it also is a sentence','is');
function solve(sentence, word) {
    let text = sentence.split(word);
  

    let result = text.join("*".repeat(word.length));
 console.log(result);

}


solve('A small sentence with some words',
'small');
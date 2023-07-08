function solve(word, text) {
    let searchWords = word.split(', ');
     let newText = text.split(' ');
      
        for (let i = 0; i < newText.length; i++) {
          if (newText[i].includes('*')) {
            let wordLength = newText[i].length;
      
            for (let j = 0; j < searchWords.length; j++) {
              if (searchWords[j].length === wordLength) {
                newText[i] = searchWords[j];
              }
            }
          }
        }
      
        
        console.log(newText.join(' '));
      }
      
      

solve('great', 'softuni is ***** place for learning new programming languages');

console.log('================');

solve('great, learning', 'softuni is ***** place for ******** new programming languages');
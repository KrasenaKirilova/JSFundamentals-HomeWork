function solve(input) {
    let text = input[0];
    let pattern = /([**]{2}|[\::]{2})([A-Z]{1}[a-z]{2,})\1/gm;
    let pattern2 = /[0-9]/gm;

    let found = text.match(pattern);
    //console.log(found);
    let foundNums = text.match(pattern2);

    let coolThreshold = 1;

    for (let i = 0; i < foundNums.length; i++) {
        let num = Number(foundNums[i]);
        coolThreshold *= num;
    }
    let newArr = [];
    found.forEach(element => {
        let sum = 0;

        for (let j = 2; j < element.length - 2; j++) {
            sum += element.charCodeAt(j);
        }
        if (coolThreshold < sum) {
            newArr.push(element);
           
        }
        
    });



    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${found.length} emojis found in the text. The cool ones are:`);
    newArr.forEach(emoji => console.log(emoji));
}

solve([("In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**")]);
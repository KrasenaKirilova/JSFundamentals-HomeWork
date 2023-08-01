function solve(input) {
    let text = input.shift();
    let command = input.shift();
    let sum = 0;
   

    for (let i = 0; i < text.length; i++) {
        let currentChar = text.charCodeAt(i);

        if (command === "LOWERCASE") {
            if (currentChar >= 97 && currentChar <= 122)
            sum += currentChar;
        }
        if (command === "UPPERCASE") {
            if (currentChar >= 65 && currentChar <= 90)
            sum += currentChar;
        }

       
    }
    console.log(`The total sum is: ${sum}`);
}




solve(['HelloFromMyAwesomePROGRAM',
    'LOWERCASE']);

    solve(['AC/DC',
    'UPPERCASE']);
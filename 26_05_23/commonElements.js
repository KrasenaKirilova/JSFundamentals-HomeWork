function solve(firstArray, secondArray) {

for (let i = 0; i < firstArray.length; i ++) {
    for(let j = 0; j < secondArray.length; j ++ ) {
        let currentElement = firstArray[i];
        let currentSecondElement = secondArray[j];
        if (currentElement === currentSecondElement) {
            console.log(currentElement);
        }

    }  
    
}

}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);
function printNthElement(arr) {
    let step = Number(arr[arr.length - 1]);
    
    let newArr = [];

    for (let i = 0; i < arr.length - 1; i +=step) {
        let element = arr[i];
        newArr.push(element);
        
    }
    console.log(newArr.join(' '));
}


//printNthElement(['5', '20', '31', '4', '20', '2']);
//printNthElement(['dsa', 'asd', 'test', 'test', '2']);
printNthElement(['1', '2', '3', '4', '5', '6']);
function rotateArray(arr) {

    
    let rotationCount = Number(arr.pop());
    let lastElement = arr.pop();
       
    for (let i = 0; i < rotationCount; i++) {
       
        arr.unshift(lastElement);
        lastElement = arr.pop();

    }
    arr.push(lastElement);
    console.log(arr.join(' '));
}

// rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut',
'Apple', '15']);
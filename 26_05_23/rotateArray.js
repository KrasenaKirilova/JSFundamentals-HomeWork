function rotateArray(arr) {
    let rotationCount = arr[arr.length - 1];
    let lastElement = arr[arr.length - 2];

    for (let i = 0; i < rotationCount; i++) {

        arr.unshift(lastElement);
        arr.splice(lastElement, 2);
      
        

    }

    console.log(arr.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);
// rotateArray(['Banana', 'Orange', 'Coconut',
// 'Apple', '15']);
function rotateArray (arr) {

    let element = Number(arr.lenght - 1);
    arr.unshift(element);
    console.log(arr);
}

rotateArray(['1', '2', '3', '4', '2']);
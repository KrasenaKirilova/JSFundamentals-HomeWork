function solve(firstArray, secondArray) {

    let newArray = [];
    let sumElement = '';
    let concatNum = '';
    let i = 0;
    let j = 0;
   
    for (i = 0; i < firstArray.length; i ++) {
        if (i %2 === 0) {
            sumElement += i;
            console.log(sumElement);
        } else {
            concatNum = i + '';
        }
    }

    for(j = 0; j < secondArray.length; j ++ ) {
        if (j %2 === 0) {
            sumElement += j;
        } else {
            concatNum = j + '';
        }
    }
            
    
    }


solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);
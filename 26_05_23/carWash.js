function carWash(arr) {
    let value = 0;
    let soap = 10;
    let arrLength = arr.length;


    for (index = 0; index < arrLength; index++) {
        let currentElement = arr[index];

        if (currentElement === 'soap') {
            value += soap;

        } else if (currentElement === 'vacuum cleaner') {
            value = value * 1.25;

        } else if (currentElement === 'water') {
            value = value * 1.2;

        } else if (currentElement === 'mud') {
            value -= value * 0.1;
        }

    }
    if (value <=100) {
        console.log(`The car is ${value.toFixed(2)}% clean.`);
    }
}


carWash(["soap", "water", "mud", "mud", "water", "mud",
"vacuum cleaner"]);
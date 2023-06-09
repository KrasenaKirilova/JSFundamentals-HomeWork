function sumFirstAndLast(input) {
let firstNum = Number(input[0]);
let lastNum = Number(input[input.length - 1]);
let sum = 0;

    for (let i=0; i< input.length; i++)
 {
    sum = firstNum + lastNum;
 }
 console.log(sum); 
}

sumFirstAndLast(['20', '30', '40']);
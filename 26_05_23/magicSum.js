function solve(arr, magicNum) {
let magicSum = 0;
let arrLength = arr.length;

for (let i = 0; i < arrLength -1 ; i +=2) {
    let firstNum = Number(arr[i]); 
    console.log(firstNum);
}
 for (let j = 1; j < arrLength; j +=2) {
        let secondNum = Number(arr[j]);
        console.log(secondNum);
    }



}

solve([1, 7, 6, 2, 19, 23], 8);
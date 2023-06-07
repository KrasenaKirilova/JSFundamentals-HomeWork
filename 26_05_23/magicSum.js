function solve(arr, magicNum) {
let magicSum = magicNum;
let arrLength = arr.length;
let currentSum = 0;

// for (let i = 0; i < arrLength - 1; i +=2){
//     let currentNum = Number(arr[i]);
//     let nextNum = Number(arr[i + 1]);
//     let currentSum = currentNum + nextNum;

//     if (currentSum === magicNum) {
//         console.log(`${currentNum} ${nextNum}`);
//     } 
// }

for (let i = 0; i < arrLength - 1 ; i++) {
    let currentNum = Number(arr[i]); 
    let nextNum = 0;

    for (let j = i+1 ; j < arrLength; j++) {
        nextNum = Number(arr[j]);
        currentSum = currentNum + nextNum;

            if (currentSum === magicSum) {
            console.log(`${currentNum} ${nextNum}`);
        } 
    }    
}
 
}




solve([1, 2, 3, 4, 5, 6],
    6);
function kNumsSeq(n, k) {
    let newArr = [1];

   while(newArr.length < n) {
    let kArr = newArr.slice(- k);
    let sum = 0;
    for (let i = 0; i < kArr.length; i++) {
        sum += kArr[i];
    }
    newArr.push(sum)
   }
console.log(newArr.join(' '));    

}


kNumsSeq(6, 3 );
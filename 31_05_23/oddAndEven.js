function oddAndEven (input) {
   
    let NumbersToString = input.toString();
    let oddSum = 0;
    let evenSum = 0;
    
    let NumbersToStringLength = NumbersToString.length;

    for( let i = 0; i < NumbersToStringLength; i++) {
        let currentNum = Number(NumbersToString[i]);
        if ( currentNum % 2 === 0) {
            evenSum += currentNum;
        } else if (currentNum % 2 !== 0){
            oddSum += currentNum;
        }
    }
console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

oddAndEven(3495892137259234);
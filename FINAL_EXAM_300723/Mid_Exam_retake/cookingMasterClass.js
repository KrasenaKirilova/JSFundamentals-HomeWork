function solve(input) {
    // input = input.map(Number);
    // console.log(input);
    let budget = input[0];
    let studentsCount = input[1];
    let floverPrice = input[2];
    let eggPrice = input[3];
    let apronPrice = input[4];
    
    let freePackage = 0;
    let sum = 0;

    for (let i = 1; i <= studentsCount; i++) {
        
        if (i % 5 === 0) {
            freePackage++;
        } 
  }
   sum = ((studentsCount - freePackage) * floverPrice) + studentsCount * 10 * eggPrice + (studentsCount*1.2) * apronPrice;
console.log(freePackage);
    if (sum <= budget) {
        console.log(`Items purchased for ${sum.toFixed(2)}$.`);
    } else {
        console.log(`${(sum - budget).toFixed(2)} more money.`);
    }


}


solve([50, 2, 1.0, 0.10, 10.0]);
solve([100, 25, 4.0, 1.0, 6.0]);
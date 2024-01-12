function solve(input) {
    input = input.map(x => Number(x));

    let side = input.shift();
    let gift = side * side * 6;
    let sheets = input.shift();
   // console.log(sheets);

    let area = 0;
    let sum = 0;
    let lengthSheet;
    let widthSheet;

    

    
    for (let i = 0; i < input.length; i++) {
        lengthSheet = input[i];
        widthSheet = input[i + 1];
        area = lengthSheet * widthSheet;
        sum += area;
        sheets--;
        console.log(sheets);
        i++;

        if (sheets % 3 === 0) {
            area = area * 0.75;
            sum += area;
        }
    }
  


    let total = (sum / gift) * 100;

    if (total < 100) {
        console.log(`You've covered the gift box!`);
        console.log(`${total.toFixed(2)}% wrap paper left.`);
    } else {
        console.log('You are out of paper!');
        console.log(`${total.toFixed(2)}% of the box is not covered.`);
    }
}

solve(["10",
    "5",
    "3",
    "0.5",
    "2.4",
    "5",
    "3.7",
    "1",
    "3",
    "34.7",
    "5",
    "80"]);

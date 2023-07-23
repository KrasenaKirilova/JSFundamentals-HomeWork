function solve(input) {
    let text = input.shift();

    let pattern = /([#]|[|])(?<item>[A-Za-z\s]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]{1,5})\1/gm;
    let calories = 0;
    let buff = '';

    let match = pattern.exec(text);

    while (match) {

        let item = match.groups.item;
        let date = match.groups.date;
        let cal = +match.groups.calories;

        calories += cal;
        buff += `Item: ${item}, Best before: ${date}, Nutrition: ${cal}\n`;


        match = pattern.exec(text);
    }
    let days = Math.floor(calories / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    console.log(buff);
}


solve(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500|| Not right|6.8.20|5|']);

console.log('======================');

solve(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#IceCream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
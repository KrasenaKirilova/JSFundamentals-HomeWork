function solve(input, num, typeElement) {
    let items = input;
    let entryPoint = Number(num);
    let type = typeElement;
    let sum = 0;
    let sum1 = 0;
    let position = "";
    
     
for (let i = 0; i < entryPoint; i++) {
        let currentItem = items[i];
    
        if (type === 'cheap') {
            let place = Math.min(currentItem, entryPoint)
            items.splice(entryPoint, 0, entryPoint);
            sum += currentItem;
            position = "left";
    }
    
     if (type === "expensive") {
        items.splice(entryPoint, entryPoint, entryPoint);
        position = "right";
        sum1 += currentItem;
     }
    
    }
        if (sum >= sum1) {
            console.log(`${position} - ${sum}`)
        } else {
            console.log(`${position} - ${sum1}`);
        }
}

/// НЕДОВЪРШЕНА!!!!!!!!!!!

solve([1, 5, 1],

    1,

    "cheap");

console.log('-------------------');

solve([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],

    7,

    "expensive");

console.log('-------------------');

solve([5, 10, 12, 5, 4, 20], 

    3, 
    
    'cheap');

console.log('-------------------');
function solve(input) {
 let tasks = {};
 
 for(let i = 0; i < input.length; i += 2){
    let type = input[i];
    let quantity = Number(input[i + 1]);
    
    if (tasks.hasOwnProperty(type)) {
        tasks[type] += quantity;
    } else {
        tasks[type] = quantity;
    }
 } 
 for (const key in tasks) {
    console.log(`${key} -> ${tasks[key]}`);
        
    }
 }
 



solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]);
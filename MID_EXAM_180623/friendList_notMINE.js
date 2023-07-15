function solve(input){
    let commands = [
        {
            item : 'Blacklist',
            do : (x) => {
                if(nameList.includes(x)){
                    let y = nameList.indexOf(x)
                    console.log(`${x} was blacklisted.`)
                    nameList[y] = "Blacklisted"
                    blacklisted++
                }else{
                    console.log(`${x} was not found.`)
                }
            }
        },
        {
            item : 'Error',
            do : (x) => {
                if(nameList[x] != undefined && nameList[x] != "Blacklisted" && nameList[x] != "Lost"){
                    console.log(`${nameList[x]} was lost due to an error.`)
                    nameList[x] = "Lost"
                    lost++
                }
            }
        },
        {
            item : 'Change',
            do : (x,y) => {
                if(nameList[x] != undefined && nameList[x] != "Blacklisted" && nameList[x] != "Lost"){
                    console.log(`${nameList[x]} changed his username to ${y}.`)
                    nameList[x] = y
                }
            }
        },
        {
            item : 'Report',
            do : (x) => {
                console.log(`Blacklisted names: ${blacklisted}`)
                console.log(`Lost names: ${lost}`)
                console.log(...nameList)
            }
        }
    ]
    let nameList = input.shift().split(", ")
    let blacklisted = 0;
    let lost = 0;
    for(type of input){       
        operation = type.split(" ")
        match = commands.find((x) => x.item === operation[0])
        if(match){
                    match.do(operation[1],operation[2])
                }
    }
}

solve(["Mike, John, Eddie",

    "Blacklist Mike",

    "Error 0",

    "Report"]);

console.log('-------------------');

solve(["Mike, John, Eddie, William", "Error 3", "Error 3", "Change 0 Mike123", "Report"]);

console.log('-------------------');

solve(["Mike, John, Eddie, William",

    "Blacklist Maya",

    "Error 1",

    "Change 4 George",

    "Report"]);

console.log('-------------------');
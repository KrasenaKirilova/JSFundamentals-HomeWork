function solve(object,position,type) {
    let left = object.slice(0,position)
    let right = object.slice(position+1)
    left = left.reduce((a,b) => a + b, 0)
    right = right.reduce((a,b) => a + b, 0)
    if(type == "cheap"){
        if(left <= right){
            console.log(`Left - ${left}`)
        }else {
            console.log(`Right - ${right}`)
        }
    }else{
        if(left >= right){
            console.log(`Left - ${left}`)
        }else {
            console.log(`Right - ${right}`)
        }
    }
}

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
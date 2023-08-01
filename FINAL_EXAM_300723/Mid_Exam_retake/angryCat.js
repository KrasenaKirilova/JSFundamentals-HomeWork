function solve(input, element, type) {
    let position = Number(element);

    let leftPart = input.slice(0, position);
    let rightPart = input.slice(position+1);

    leftPart = leftPart.reduce((a, b) => a + b, 0);
    rightPart = rightPart.reduce((a, b) => a + b, 0)

    if (type === 'cheap') {
        if (leftPart <= rightPart) {
            console.log(`Left - ${leftPart}`);
        } else {
            console.log(`Right - ${rightPart}`);
        }
    }
    if (type === 'expensive') {
        if (leftPart >= rightPart) {
            console.log(`Left - ${leftPart}`);
        } else {
            console.log(`Right - ${rightPart}`);
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
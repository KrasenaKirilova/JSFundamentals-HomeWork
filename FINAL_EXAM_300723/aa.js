let a = Number(true)
let b = 20;
let c = 'George';

for (let i = 10; i > 3; i -= 2) {
    console.log(i);
}
console.log(c.charAt(2));

let arr = ['z', 's', 'a', 'd'];
arr.sort((a, b) => b.localeCompare(a))
console.log(arr);
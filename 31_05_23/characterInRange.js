function solve(first, second) {

    let startChar = Math.min(first.charCodeAt(), second.charCodeAt());
    let endChar = Math.max(first.charCodeAt(), second.charCodeAt());

    let charArray = [];

    for(let i = startChar + 1; i < endChar; i++) {
        charArray.push(String.fromCharCode(i));

    }
    
    console.log(charArray.join(' '));

}

solve('#', ':');
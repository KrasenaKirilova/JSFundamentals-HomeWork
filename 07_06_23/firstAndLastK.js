function firtAndLastK (input) {
    let k = input.shift();
 console.log(input.slice(0, k).join(' '));    
 console.log(input.slice(input.length - k, input.lenght).join(' '));
   
}

firtAndLastK([3, 6, 7, 8, 9]);
function loadingBar(input){
    let percentCounter = input / 10;
    let dotsCounter = 10 - percentCounter;

    if (percentCounter === 10 ) {
        console.log(`100% Complete!`);
        console.log(`[${'%'.repeat(percentCounter)}]`);
    } else {
        
        console.log(`${input}% [${'%'.repeat(percentCounter)}${'.'.repeat(dotsCounter)}]`);
        console.log(`Still loading...`);
    }

}


loadingBar(30);
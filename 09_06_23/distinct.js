function distict(nums) {

    let newArray = [];

    for (const num of nums) {

        if(!newArray.includes(num)) {
            newArray.push(num);
        }
    }
    console.log(newArray.join(' '));
}

distict([20, 8, 12, 13, 4, 4, 8, 5]);
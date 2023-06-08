function addAndRemove(arr) {
    let command = '';
    
    let num = 1;
    let myArr = [];

    for (index = 0; index < arr.length; index++) {
        
        command = arr[index];

        if (command === "add") {
            
            myArr.push(num);
            num++;
        }

        if(command === "remove") {
            
            myArr.pop(num);
            num++;
        }

    }

    if( myArr.length === 0) {
        console.log('Empty');
    } else {
        console.log(myArr.join(' '));
    }

}

//addAndRemove (['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);
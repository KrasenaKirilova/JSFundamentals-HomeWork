function shopingList(input) {
    let list = input.shift().split('!');
    
    let index = 0;
    let command = input[index];
    
    index++;


    while (command !== 'Go Shopping!') {
        let tokens = command.split(' ');
        let item;
        switch (tokens[0]) {
            case "Urgent":
                item = tokens[1];
                if (list.indexOf(item) === -1) {
                    list.unshift(item);
                } break;

            case "Unnecessary": 
                item = tokens[1];
                if (list.indexOf(item) > -1) {
                    list.splice(list.indexOf(item), 1);
                } break;

            case "Correct":
                let oldItem = tokens[1];
                let newItem = tokens[2];
                let indexOfElement = list.indexOf(oldItem);
                if (indexOfElement > -1) {
                    // list.splice(indexOfItem, 0, newItem);
                    list[indexOfElement] = newItem;
                }
                  break;
            case "Rearrange":
                item = tokens[1];
                if (list.indexOf(item) > -1) {
                    let currentItem = list.splice(list.indexOf(item),1);
                    list.push(currentItem);
                } break;
        }
        command = input[index];
        index++;

    }

console.log(list.join(','));


}

    


    console.log('------------');

    shopingList((["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"]));

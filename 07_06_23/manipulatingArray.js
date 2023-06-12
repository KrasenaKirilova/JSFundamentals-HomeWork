function manipulatingArray(arr, command) {
    let newArr = [];

    function add(num)  {
        newArr.push(num);
    }

    function remove(num)  {
        newArr.slice(num);
    }
    function removeAt(num)  {
        newArr.splice(num, 0);
    }

    function insert(num, num1)  {
        newArr.splice(num1, 0, num);
    }

}

manipulatingArray(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']);
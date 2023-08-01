function solve(input) {
    let messageCount = Number(input.shift());
    let users = new Map();

    let [action, userName, sent, received] = input.shift().split('=');

    if (action !== 'Statistics') {
        switch (action) {
            case 'Add': {
                users.set(userName, []);
                users.get(userName).push(Number(sent));
                users.get(userName).push(Number(received));
                console.log(users);
            }
                break;
            case "Message": {   

               

              

            }
            default:
                break;
        }
    } else {
       
    }



}



solve((["10",

    "Add=Berg=9=0",

    "Add=Kevin=0=0",

    "Message=Berg=Kevin",

    "Add=Mark=5=4",

    "Statistics"]));

console.log('================');

solve((["20",

    "Add=Mark=3=9",

    "Add=Berry=5=5",

    "Add=Clark=4=0",

    "Empty=Berry",

    "Add=Blake=9=3",

    "Add=Michael=3=9",

    "Add=Amy=9=9",

    "Message=Blake=Amy",

    "Message=Michael=Amy",

    "Statistics"]));

console.log('================');

solve()
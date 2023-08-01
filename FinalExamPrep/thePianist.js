function solve(input) {
    let num = Number(input.shift());
    let colection = {};

    for (let i = 0; i < num; i++) {
        let [piece, composer, key] = input.shift().split('|');

        if (!colection.hasOwnProperty(piece)) {
            colection[piece] = {};
        }

        colection[piece][composer] = key;

        // let currentPiece = pieces.find((x) => x.piece === piece);
        //console.log(currentPiece);

        // if (!currentPiece) {
        //     let newPiece = {
        //         piece,
        //         composer,
        //         key
        //     }
        //     pieces.push(newPiece);
        // }
    }
    // console.log(pieces[2]);

    let command = input.shift();
   //console.log(command);
    while (command !== "Stop") {
        let [action, piece, composer, key] = command.split('|');


        if (action === "Add") {
            if (colection.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
            }
            colection[piece] = {};
            colection[piece][composer] = key;
            console.log(`${piece} by ${composer} in ${key} added to the collection!`);

        } 
        
        if (action === "Remove") {
            if (!colection.hasOwnProperty(piece)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                break;
            } else {
                delete colection[piece];
                console.log(`Successfully removed ${piece}!`);
                break;
            }
        }
        if (action === "ChangeKey") {
            if (!colection.hasOwnProperty(piece)) {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                break;
            } else {
                let newKey = composer;
                
            }


        command = input.shift();
    }
    console.table(colection);
}

}

solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);
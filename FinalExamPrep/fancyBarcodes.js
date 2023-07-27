function solve(input) {
    const pattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/gm;
    let num = Number(input.shift());

    for (let i = 0; i < num; i++) {
        let text = input.shift();

        let barCode = text.match(pattern);
       // console.log(barCode);


        if (barCode) {
           // barCode = barCode.shift().split('');
            
            const pattern2 = /\d/gm;

          //  let digitsResult;
            let digitsArr = [];

            // for (let j = 0; j < barCode.length; j++) {

            let digitsResult = pattern2.exec(barCode);
            console.log(digitsResult);

             digitsArr.push(digitsResult);
             console.log(digitsArr);

            // if (digitsResult === null) {
            //     console.log('Product group: 00');
            // } else if (digitsArr.length > 0) {
            //     for (let j = 0; j < digitsArr.length; j++) {
            //         let digit = digitsArr[j];
            //         digit += digit;
            //         console.log(`Product group: ${digit}`)
            //     }
        }

    }


    //}
}
//}


solve(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]);

console.log('===========');

solve(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]);
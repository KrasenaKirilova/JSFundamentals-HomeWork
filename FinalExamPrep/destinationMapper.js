function solve(input) {
    let regex = /[=|\/][A-Z][a-z]{2,}[=|\/]/gm;
    let destinations = [];
    let points = 0;

    let found = input.match(regex);
   
    if (found) {
        found.forEach(sity => {
            if (sity[0] === sity[sity.length - 1]) {
                sity = sity.substring(1, sity.length - 1);
                destinations.push(sity);
                points += sity.length;

            }
        });
    }
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${points}`);
}


solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
solve("ThisIs some InvalidInput");
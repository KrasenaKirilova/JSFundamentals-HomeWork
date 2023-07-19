function solve(text) {

    let textArr = [];
    let index = 0;

    for (let i = 1; i < text.length; i++) {
        if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
            textArr.push(text.substring(index, i));
            index = i;
        }

    }
    textArr.push(text.substring(index));
    console.log(textArr.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
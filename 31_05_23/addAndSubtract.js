function addAndSubtract(a, b, c) {

    function sum(a, b) {
        return a + b;
    }
    let resultSum = sum(a, b);

    function subtract(resultSum, c) {
        return resultSum - c;
    }
    let resultSubtract = subtract(resultSum, c)

    console.log(resultSubtract);
}

addAndSubtract(23,
    6,
    10)
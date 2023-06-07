function maxSequence(arr) {

    let sequence = 1;
    let maxSequence = 0;
    let maxSequenceDigit = 0;


    for (let i = 0; i < arr.length; i++) {

        if (i !== 0) {
            let currentDigit = Number(arr[i]);
            let prevDigit = Number(arr[i - 1]);

            if (currentDigit === prevDigit) {
                sequence++;

                if (sequence > maxSequence) {
                    maxSequence = sequence;
                    maxSequenceDigit = currentDigit;
                }

            
        } else {
            sequence = 1;
        }
    }
}

console.log(`${(maxSequenceDigit + ' ').repeat(maxSequence)}`);


}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
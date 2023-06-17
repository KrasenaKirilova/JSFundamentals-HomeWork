function bonusScoringSystem(input) {
    let newArr = input.map(Number);
    let studentsCount = newArr.shift();
    let lectureCount = newArr.shift();
    let aditionalBonus = newArr.shift();

    let maxBonus = 0;
    let maxLecture;
    // let studentsArr = [];

    for (let i = 0; i < studentsCount; i++) {
        let currentLecture = newArr[i];
        let currentBonus = (currentLecture / lectureCount * (5 + aditionalBonus));
        if (currentBonus > maxBonus) {
            maxBonus = currentBonus;
            maxLecture = currentLecture;
        }
        // studentsArr.push(bonus);
        // studentsArr.map(Number);
    }

    maxBonus = Math.seil(maxBonus);
    // let maxIndexFromStudentsArr = studentsArr.indexOf(maxBonus);
    // let maxIndexStudent = newArr[maxIndexFromStudentsArr];

    console.log(`Max Bonus: ${maxBonus}.`);

    console.log(`The student has attended ${maxLecture} lectures.`);
}


bonusScoringSystem([

    '5', '25', '30',

    '12', '19', '24',

    '16', '20'

]);

console.log('--------------------');

bonusScoringSystem(['10', '30', '14', '8',

    '23', '27', '28', '15',

    '17', '25', '26', '5',

    '18'

]);
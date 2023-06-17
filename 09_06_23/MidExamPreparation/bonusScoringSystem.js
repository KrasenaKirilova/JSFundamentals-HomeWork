function bonusScoringSystem(input) {
    let newArr = input.map(Number);
    let studentsCount = newArr.shift();
    let lectureCount = newArr.shift();
    let aditionalBonus = newArr.shift();
    let bonus = 0;
    let maxBonus = 0;
    let studentsArr = [];

    for (let i = 0; i < studentsCount; i++) {
        let currentStudent = newArr[i];
        bonus = (currentStudent / lectureCount * (5 + aditionalBonus));
        studentsArr.push(bonus);
        studentsArr.map(Number);
    }
    
    maxBonus = Math.max(...studentsArr);
    let maxIndexFromStudentsArr = studentsArr.indexOf(maxBonus);
    let maxIndexStudent = newArr[maxIndexFromStudentsArr];

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);

    console.log(`The student has attended ${Math.ceil(maxIndexStudent)} lectures.`);
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
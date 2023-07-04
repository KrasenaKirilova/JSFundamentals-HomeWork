function solve(input) {

    let students = {};

    for (const line of input) {
        let studentArray = line.split(' ');
        let name = studentArray.shift();
        let grades = studentArray.map(x => Number(x));

        if (!students.hasOwnProperty(name)) {
            students[name] = [];
        }
        students[name] = students[name].concat(grades);
    }

    let entries = Object.entries(students).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name, grades] of entries) {
        totalGrade = 0;
        for (const grade of grades) {
            totalGrade += grade;
        }
        let average = totalGrade / grades.length;
        console.log(`${name}: ${average.toFixed(2)}`);
    }
}

solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);
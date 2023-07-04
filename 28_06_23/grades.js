function solve(input) {
    let grades = {};
    let totalGrades = 0;
    let counter = 0;
    let avg = 0;

    for (const line of input) {
        totalGrades = 0;
        let tokens = line.split(' ');
        let name = tokens.shift();
        let currentGrade = tokens;

        for (let index = 0; index < tokens.length; index++) {
            currentGrade = Number(tokens[index]);
            totalGrades += currentGrade;
            counter++;

        }
        
        if (grades.hasOwnProperty(name)) {
            totalGrades += currentGrade;
            counter++;
            grades[name] = totalGrades;

        } else {
            grades[name] = totalGrades;
        }

        console.log(grades);
        console.log(counter);
        

    }

    avg = totalGrades / counter;
    console.log(avg);
    let entries = Object.entries(grades).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [key, value] of entries) {
        console.log(`${key}: ${value.toFixed(2)}`);

    }

}

solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);
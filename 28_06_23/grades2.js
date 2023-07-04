function solve(data) {
    let result = {};
    
    for (let line of data) {
        let tokens = line.split(' ');
        let studentName = tokens.shift();
        let studentGrades = tokens.map(Number);
       
        if(!result.hasOwnProperty(studentName)) {
            result[studentName] = [];
        }
        result[studentName].push(studentGrades);
    }
    let studentEntries = Object.entries(result).sort((a,b) => a[0].localeCompare(b[0]));
    
    for (let [name, grades] of studentEntries) { 
        let sum = 0;
       
        for (let grade of grades) { 
            sum += grade;
        }
        let avg = sum / grades.length;
    
        console.log(`${name}: ${avg.toFixed(2)}`);
    }
    }

    solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);
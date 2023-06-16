function softUniReception(input) {
    let firstAsistent = Number(input.shift());
    let secondAsistent = Number(input.shift());
    let thirdAsistent = Number(input.shift());
    let totalStudents = Number(input.shift());

    let students = firstAsistent + secondAsistent + thirdAsistent;
    let neededHours = 0;
    
    while (totalStudents > 0) {
        neededHours++;
        totalStudents -= students;
        
            if(neededHours % 4 === 0){
                neededHours++;
            }
    }
    console.log(`Time needed: ${neededHours}h.`);

}

softUniReception(['5','6','4','20']);
console.log('===========');
softUniReception(['1','2','3','45']);
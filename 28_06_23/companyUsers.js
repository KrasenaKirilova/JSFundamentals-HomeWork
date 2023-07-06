function solve(input) {
    let companies = {};

    for (const line of input) {
        let [nameCompany, userId] = line.split(' -> ');
        
        if (!companies.hasOwnProperty(nameCompany)) {
            companies[nameCompany] = [];
        } 
        companies[nameCompany].push(userId);
    }
    
    let sortedArr = Object.entries(companies);
    sortedArr.sort((a, b) => a[0].localeCompare(b[0]));

    for (const element of sortedArr) {
        let name = element[0];
        console.log(name);
        let set = new Set(element[1]);
        
        for (const id of set) {
            console.log(`-- ${id}`);
        }  
    }    
}
    
    



solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]);
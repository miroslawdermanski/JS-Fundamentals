function companyUsers(array){

    let employees = {}

    for(let string of array){

        let [companyName, employeeID] = string.split(' -> ')

        if(!employees.hasOwnProperty(companyName)){

            employees[companyName] = []
            employees[companyName].push(employeeID)
        } else {

            if(!employees[companyName].includes(employeeID)){

                employees[companyName].push(employeeID)
            }
        }
    }

    let kvps = Object.entries(employees)
    .sort((a, b) => a[0].localeCompare(b[0]))

    for(let [compName, empIDs] of kvps){

        console.log(compName);

        empIDs.forEach(ID => console.log(`-- ${ID}`))
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'])

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'])
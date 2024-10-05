function employees(array){

    for(let empName of array){

        let employee = {
            name: empName,
            personalNumber: empName.length
        }
        console.log(`Name: ${employee["name"]} -- Personal Number: ${employee["personalNumber"]}`);
    }

}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'])

employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'])
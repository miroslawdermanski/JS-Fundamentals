function schoolGrades(array){

    let students = {};

    for(let string of array){

        string = string.split(' ')
        let name = string.shift()
        
        if(students.hasOwnProperty(name)){

            students[name] += ` ${string.join(' ')}`
        } else {

            students[name] = string.join(' ')
        }
    }

    let kvps = Object.entries(students)
    kvps.sort((a,b) => a[0].localeCompare(b[0]))

    for(let kvp of kvps){

        let averageGrade = 0
        kvp[1] = kvp[1].split(' ').map(Number)
        let sum = 0
        for(let grade of kvp[1]){
            sum += grade
        }
        averageGrade = sum / kvp[1].length
        console.log(`${kvp[0]}: ${averageGrade.toFixed(2)}`)
    }

}

schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])

schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3'])
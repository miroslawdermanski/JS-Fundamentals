function schoolRegister(array){

    let register = []

    for(let string of array){

        string = string.split(', ');

        let name = string[0].split(': ')[1];
        let grade = Number(string[1].split(': ')[1])
        let score = Number(string[2].split(': ')[1])

        let student = {

            name,
            grade,
            score
        }
        if(student.score >= 3){
            student.grade += 1
            register.push(student)
        }
    }

    register.sort((a, b) => a.grade - b.grade)

    let curGrade = 0
    for(let student of register){

        if(student.grade != curGrade){
            curGrade = student.grade
            console.log(`${curGrade} Grade`);
            let students = register.filter(student => student.grade == curGrade)
            let names = students.map(student => student.name)
            console.log(`List of students: ${names.join(', ')}`);
            let sumScore = students.reduce((acc, student) => acc + student.score, 0)
            console.log(`Average annual score from last year: ${(sumScore / students.length).toFixed(2)}`);
            console.log('');
        }
    }
}

schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"])

// schoolRegister([
//     'Student name: George, Grade: 5, Graduated with an average score: 2.75',
//     'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
//     'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
//     'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
//     'Student name: John, Grade: 9, Graduated with an average score: 2.90',
//     'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
//     'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'])
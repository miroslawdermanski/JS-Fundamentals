function bonusScoreSystem(array){

    let students = Number(array.shift())
    let totalLecturers = Number(array.shift())
    let additionalBonus = Number(array.shift())
       
    array = array.map(Number)
    let maxBonus = 0
    let attendencesOfMaxBonusStudent = 0
    for(let curStudent of array){

        let curStudentTotalBonus = curStudent / totalLecturers * (5+additionalBonus)

        if(curStudentTotalBonus > maxBonus){
            maxBonus = curStudentTotalBonus
            attendencesOfMaxBonusStudent = curStudent
        }
    }
    
    console.log(`Max Bonus: ${Math.round(maxBonus)}.`);
    console.log(`The student has attended ${attendencesOfMaxBonusStudent} lectures.`);
}

bonusScoreSystem([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'])

bonusScoreSystem([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'])
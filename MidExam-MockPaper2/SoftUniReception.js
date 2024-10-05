function softUniReseption(array){

    let employeeOneNumPerHour = Number(array.shift())
    let employeeTwoNumPerHour = Number(array.shift())
    let employeeThreeNumPerHour = Number(array.shift())

    let studentCount = Number(array.shift())

    let totalStudentsPerHour = employeeOneNumPerHour+employeeTwoNumPerHour+employeeThreeNumPerHour

    let totalHoursNeeded = 0
    while(studentCount > 0){

        totalHoursNeeded++
        if(totalHoursNeeded % 4 == 0){
            continue
        } else {
            studentCount -= totalStudentsPerHour
        }
              
    }
    console.log(`Time needed: ${totalHoursNeeded}h.`);
}

softUniReseption(['5','6','4','20'])

softUniReseption(['1','2','3','45'])

softUniReseption(['3','2','5','40'])
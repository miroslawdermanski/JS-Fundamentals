function formatGrade(grade){

    let buffer = ''

    if(grade < 3.00){
        buffer = `Fail (2)`
    } else if(grade < 3.50){
        buffer = `Poor (${grade.toFixed(2)})`
    } else if(grade < 4.50){
        buffer = `Good (${grade.toFixed(2)})`
    } else if (grade < 5.50){
        buffer = `Very good (${grade.toFixed(2)})`
    } else {
        buffer = `Excellent (${grade.toFixed(2)})`
    }
    console.log(buffer);

}

formatGrade(3.33)
formatGrade(4.50)
formatGrade(2.99)
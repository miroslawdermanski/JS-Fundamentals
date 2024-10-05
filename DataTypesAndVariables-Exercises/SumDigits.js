function sumDigits(number){

    let numberString = String(number)
    let sum = 0
    for(let i = 0; i < numberString.length; i++){

        sum += Number(numberString[i])
    } console.log(sum);

}

sumDigits(245678)
sumDigits(97561)
sumDigits(543)
function returnEnglishName(number){

    //let numberString = String(number)
    let lastDigit = Number(String(number)[number.toString().length - 1])
    let output = ''

    switch(lastDigit){
        case 0: output = 'zero' ; break
        case 1: output = 'one' ; break
        case 2: output = 'two' ; break
        case 3: output = 'three' ; break
        case 4: output = 'four' ; break
        case 5: output = 'five' ; break
        case 6: output = 'six' ; break
        case 7: output = 'seven' ; break
        case 8: output = 'eight' ; break
        case 9: output = 'nine' ; break
    }
    console.log(output);

}

returnEnglishName(512)
returnEnglishName(1)
returnEnglishName(1643)
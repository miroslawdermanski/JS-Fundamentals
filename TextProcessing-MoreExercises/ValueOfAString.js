function valueOfString(input){

    let string = input.shift()
    let totalSum = 0

    let upperCaseLetters = ''
    let lowerCaseLetters = ''

    for(let letter of string){
        if((letter.charCodeAt() < 65 || letter.charCodeAt() > 90) && (letter.charCodeAt() < 97 || letter.charCodeAt() > 122)){
            continue
        }
        if(letter == letter.toUpperCase()){
            upperCaseLetters += letter
        } else {
            lowerCaseLetters += letter
        }
    }
    if(input[0] == 'UPPERCASE'){

        for(let letter of upperCaseLetters){
            totalSum += letter.charCodeAt()
        }
    } else if(input[0] == 'LOWERCASE'){

        for(let letter of lowerCaseLetters){
            totalSum += letter.charCodeAt()
        }
    }
    console.log(`The total sum is: ${totalSum}`);
}

valueOfString(['HelloFromMyAwesomePROGRAM',
            'LOWERCASE'])

valueOfString(['AC/DC',
            'UPPERCASE'])
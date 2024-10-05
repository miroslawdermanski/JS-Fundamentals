function lettersChangeNums(input){

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    input = input.split(' ')
    let totalSum = 0
    for(let string of input){
        if(string == '') continue
        
        let frontLetter = string[0]
        let backLetter = string[string.length - 1]
        let number = Number(string.slice(1, string.length - 1))

        let frontLetterPosition = Number(alphabet.indexOf(frontLetter.toUpperCase())+1)
        let backLetterPosition = Number(alphabet.indexOf(backLetter.toUpperCase())+1)
        if(frontLetter == frontLetter.toUpperCase()){
            number /= frontLetterPosition
        } else {
            number *= frontLetterPosition
        }
        if(backLetter == backLetter.toUpperCase()){
            number -= backLetterPosition
        } else {
            number += backLetterPosition
        }
        totalSum += number
    
    }
    console.log(totalSum.toFixed(2));
}

lettersChangeNums('A12b s17G')

lettersChangeNums('P34562Z q2576f   H456z')

lettersChangeNums('a1A')
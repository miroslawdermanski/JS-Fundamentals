function charsInRange(char1, char2){

    let asciiCodeChar1 = char1.charCodeAt(0)
    let asciiCodeChar2 = char2.charCodeAt(0)

    let minCode = 0
    asciiCodeChar1 < asciiCodeChar2 ? minCode = asciiCodeChar1 : minCode = asciiCodeChar2
    let maxCode = 0
    asciiCodeChar1 > asciiCodeChar2 ? maxCode = asciiCodeChar1 : maxCode = asciiCodeChar2

    printChars(minCode, maxCode)

    function printChars(startCode, endCode){
        let buffer = ''
    for(let curCode = minCode + 1; curCode < maxCode; curCode++){

        let curChar = String.fromCharCode(curCode)
        buffer += `${curChar} `
    }

    console.log(buffer);
    }
}

charsInRange('a', 'd')
charsInRange('#', ':')
charsInRange('C', '#')
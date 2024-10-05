function reverseString(string){

    let reversedString = ''
    for(let i = string.length-1; i >= 0; i--){
        reversedString += string[i]
    }
    console.log(reversedString);

}

reverseString('Hello')
reverseString('SoftUni')
reverseString('1234')

function reverseAstring(string){

    console.log(`${string.split("").reverse().join("")}`);

}

reverseAstring('Hello')
reverseAstring('SoftUni')
reverseAstring('1234')
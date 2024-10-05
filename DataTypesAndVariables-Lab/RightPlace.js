function checkString(string1, char, string2){

    let result = ''
    for(let i = 0; i < string1.length; i++){
        if(string1[i] == '_'){
            result += char
        } else {
            result += string1[i]
        }
    }
    if(result == string2){
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }

}
checkString('Str_ng', 'i', 'String')
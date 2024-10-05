function lowerOrUpper(char){

    let isUpper = false
    if(char.charCodeAt() < 97){
        isUpper = true
    }
    console.log(isUpper ? 'upper-case' : 'lower-case');

}

lowerOrUpper('L')
lowerOrUpper('f')
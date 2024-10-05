function integerOrFloat(num1, num2, num3){

    let sum = num1 + num2 + num3
    let sumString = String(sum)
    let isFloat = false
    for(let i = 0; i < sumString.length; i++){
        if(sumString[i] == '.'){
            isFloat = true
            break
        }
    }
    console.log(`${sum} - ${isFloat ? 'Float' : 'Integer'}`);

}
integerOrFloat(100, 200, 303)
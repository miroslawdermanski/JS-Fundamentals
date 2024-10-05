function integerOrFloat(num1, num2, num3){

    let sum = num1 + num2 + num3
    let isFloat = true
    if(sum % 1 == 0){
        isFloat = false
    }
    
    console.log(`${sum} - ${isFloat ? 'Float' : 'Integer'}`);

}
integerOrFloat(100, 200, 303)
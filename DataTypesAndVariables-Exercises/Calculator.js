function calculate(num1, operand, num2){

    let result = 0
    switch(operand){

        case '+': result =  num1 + num2; break
        case '-': result = num1 - num2; break
        case '/': result = num1 / num2; break
        case '*': result = num1 * num2; break
    }
    console.log(result.toFixed(2));

}

calculate(5,'+',10)
calculate(25.5,'-',3)
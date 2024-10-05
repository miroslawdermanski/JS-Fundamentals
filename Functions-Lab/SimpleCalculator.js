function simpleCalc(num1, num2, operator){

    let operations = [

        (num1, num2) => num1 + num2,
        (num1, num2) => num1 - num2,
        (num1, num2) => num1 * num2,
        (num1, num2) => num1 / num2
    ]

    let operationNames = [

        'add',
        'subtract',
        'multiply',
        'divide'
    ]

    let index = 0

    for(let i = 0; i < operationNames.length; i++){

        if(operationNames[i] == operator){
            index = i
            break
        }
    }

    let action = operations[index]
    console.log(action(num1, num2));

}

simpleCalc(5, 5, 'multiply')
simpleCalc(40, 8, 'divide')
simpleCalc(12, 19, 'add')
simpleCalc(50, 13, 'subtract')
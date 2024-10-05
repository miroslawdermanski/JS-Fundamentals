function addAndSubtract(num1, num2, num3){

    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;


    let result1 = add(num1, num2)
    let output = subtract(result1, num3)

    console.log(output);

    // function add(num1, num2){

    //     return num1 + num2
    // }

    // function subtract(num1, num2){

    //     return num1 - num2
    // }

}

addAndSubtract(23, 6, 10)
addAndSubtract(1, 17, 30)
addAndSubtract(42, 58, 100)
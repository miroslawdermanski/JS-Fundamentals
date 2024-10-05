function roundNumbers(number1, number2){

    if(number2 > 15){
        number2 = 15
    }
    number1 = number1.toFixed(number2)
    console.log(parseFloat(number1));

}

roundNumbers(10.5,3)
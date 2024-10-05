function factorialDivision(num1, num2){

    let factorial1 = num1
    while(num1 > 1){

        factorial1 *= num1-1
        num1-- 
    }
    let factorial2 = num2
    while(num2 > 1){

        factorial2 *= num2-1
        num2--
    }
    console.log(`${(factorial1/factorial2).toFixed(2)}`);

}
factorialDivision(5, 2)
factorialDivision(6, 2)
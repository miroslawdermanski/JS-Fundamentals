function factorialDivision(num1, num2){

    console.log((findFactorial(num1)/findFactorial(num2)).toFixed(2));

    function findFactorial(number){

        let factorial = number
        while(number > 1){

            factorial *= number - 1
            number--
        }
        return factorial
    }
}
factorialDivision(5, 2)
factorialDivision(6, 2)
function numberModification(number){

    while(averageDigits(number) <= 5){
        Number(number += '9')
    }
    console.log(number);

    function averageDigits(num){

        let numString = String(num)
        let digitsSum = 0
        for(let curDigit of numString){

            digitsSum += Number(curDigit)
        }
        let average = digitsSum / numString.length
        return average
    }

}

numberModification(101)
numberModification(5835)
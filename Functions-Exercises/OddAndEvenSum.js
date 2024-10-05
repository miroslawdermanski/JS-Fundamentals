function oddAndEvenSum(num){

    let numString = String(num)

    let [oddSum, evenSum] = findOddEvenSum(numString)
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

    function findOddEvenSum(str){

        let oddSum = 0; let evenSum = 0
        for(let curChar of str){

            if(Number(curChar) % 2 == 0){
                evenSum += Number(curChar)
            } else {
                oddSum += Number(curChar)
            }
        }
        
        return [oddSum, evenSum]
    }

}

oddAndEvenSum(1000435)
oddAndEvenSum(3495892137259234)

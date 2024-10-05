function perfectNum(number){

    console.log(findDivisorsAndTheirSum(number) == number ? 'We have a perfect number!': `It's not so perfect.`)

    function findDivisorsAndTheirSum(num){

        let sumOfAllDivisors = 0
        for(let i = 1; i < num; i++){

            if(num % i == 0){
                sumOfAllDivisors += i
            }
        }

        return sumOfAllDivisors
    }

}

perfectNum(6)
perfectNum(28)
perfectNum(1236498)
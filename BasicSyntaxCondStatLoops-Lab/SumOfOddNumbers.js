function printOddNums(n){

    let totalOddNumsSum = 0
    let currentNum = 1
    
    while(n > 0){

        if(currentNum % 2 != 0){
            console.log(currentNum)
            totalOddNumsSum += currentNum
            n--
        }
        currentNum++
    }
    console.log(`Sum: ${totalOddNumsSum}`)

}

printOddNums(3)
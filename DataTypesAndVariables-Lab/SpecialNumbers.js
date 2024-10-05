function specialNumbers(num){

    for(let curNum = 1; curNum <= num; curNum++){

        let isSpecial = false
        let currentSum = 0
        for(let i = 0; i < String(curNum).length; i++) {

            currentSum += Number(String(curNum)[i])
        }
        if(currentSum == 5 || currentSum == 7 || currentSum == 11){
            isSpecial = true
        }
        console.log(`${curNum} -> ${isSpecial ? 'True': 'False'}`);

    }

}

specialNumbers(15)
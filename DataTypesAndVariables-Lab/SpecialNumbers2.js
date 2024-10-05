function specialNumbers(num){

    for(let curNum = 1; curNum <= num; curNum++){

        let sum = 0
        let currentNum = curNum; // Store the current number to avoid modifying the loop variable
        while (currentNum > 0) {
            sum += currentNum % 10;
            currentNum = parseInt(currentNum / 10);
        }
        let isSpecial = sum == 5 || sum == 7 || sum == 11;
        console.log(`${curNum} -> ${isSpecial ? 'True': 'False'}`);
    }

}

specialNumbers(15)
function displaynumbersInRange(start, end){

    let totalSum = 0
    let buffer = ''
    for(let firstNum = start; firstNum <= end; firstNum++){

        buffer += `${firstNum} `
        totalSum += firstNum
    }
    console.log(`${buffer}\nSum: ${totalSum}`);

}

displaynumbersInRange(50, 60)
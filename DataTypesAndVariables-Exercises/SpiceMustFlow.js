function findTotalAmountOfSpice(startingYield){

    let totalSpiceMined = 0
    let totalDays = 0
    while(startingYield >= 100){

        totalDays++
        totalSpiceMined += startingYield - 26
        startingYield -= 10
    }
    if(totalSpiceMined >= 26){
        totalSpiceMined -= 26
    } else {
        totalSpiceMined = 0
    }
    console.log(`${totalDays}\n${totalSpiceMined}`);

}

findTotalAmountOfSpice(111)
findTotalAmountOfSpice(450)
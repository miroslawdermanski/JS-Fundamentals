function blackFlag(array){

    const days = Number(array.shift())
    const dailyPlunder = Number(array.shift())
    const expectedPlunder = Number(array.shift())

    let totalPlunderGathered = 0
    for(let curDay = 1; curDay <= days; curDay++){

        if(curDay % 3 == 0){
            totalPlunderGathered += dailyPlunder * 1.5
        } else {
            totalPlunderGathered += dailyPlunder
        }
        if(curDay % 5 == 0){

            totalPlunderGathered *= 0.7
        }
        
    }
    if(totalPlunderGathered >= expectedPlunder){
        console.log(`Ahoy! ${totalPlunderGathered.toFixed(2)} plunder gained.`);
    } else {
        let percentageLeft = (expectedPlunder - totalPlunderGathered) / expectedPlunder * 100
        console.log(`Collected only ${(100 - percentageLeft).toFixed(2)}% of the plunder.`);
    }
}

blackFlag((["5",
            "40",
            "100"]))

blackFlag((["10",
            "20",
            "380"]))
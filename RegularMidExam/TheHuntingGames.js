function huntingGames(input){

    let daysOfAdventure = Number(input.shift())
    let playersCount = Number(input.shift())
    let groupEnergy = Number(input.shift())
    let waterPerDayForOnePerson = Number(input.shift())*playersCount*daysOfAdventure
    let foodPerDayForOnePerson = Number(input.shift())*playersCount*daysOfAdventure

    let dayCount = 1
    for(let curDay = 0; curDay < daysOfAdventure; curDay++){

        let energyLoss = Number(input[curDay])
        groupEnergy -= energyLoss
        if(groupEnergy <= 0){
            console.log(`You will run out of energy. You will be left with ${foodPerDayForOnePerson.toFixed(2)} food and ${waterPerDayForOnePerson.toFixed(2)} water.`);
            return
        } else {

            
            if(dayCount % 2 == 0){
                groupEnergy += (groupEnergy * 0.05)
                waterPerDayForOnePerson -= (waterPerDayForOnePerson * 0.30)
            }
            if(dayCount % 3 == 0){
                foodPerDayForOnePerson -= (foodPerDayForOnePerson / playersCount)
                groupEnergy += groupEnergy*0.1
            }
        }

        dayCount++
    }

    console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);

}

huntingGames((["10",
                "7",
                "5035.5",
                "11.3",
                "7.2",
                "942.3",
                "500.57",
                "520.68",
                "540.87",
                "505.99",
                "630.3",
                "784.20",
                "321.21",
                "456.8",
                "330"]))
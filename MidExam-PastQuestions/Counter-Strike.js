function counterStrike(array){

    let initialEnergy = Number(array.shift())
    let wins = 0

    let distance = array.shift()
    while(distance != "End of battle"){

        distance = Number(distance)
        if(initialEnergy - distance >= 0){
            initialEnergy -= distance
            wins++
            if(wins % 3 == 0){
                initialEnergy += wins
            }
        } else {
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${initialEnergy} energy`);
            return
        }
        distance = array.shift()
        
    }
    console.log(`Won battles: ${wins}. Energy left: ${initialEnergy}`)
}

counterStrike((["100",
                "10",
                "10",
                "10",
                "1",
                "2",
                "3",
                "73",
                "10"]))

counterStrike((["200",
                "54",
                "14",
                "28",
                "13",
                "End of battle"]))
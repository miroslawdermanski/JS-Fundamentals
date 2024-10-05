function treasureHunt(array){

    let treasureChest = array.shift().split('|')

    let command = array.shift()

    while(command != 'Yohoho!'){

        command = command.split(' ')
        let action = command.shift()

        if(action == 'Loot'){

            for(let item of command){

                if(!treasureChest.includes(item)){
                    treasureChest.unshift(item)
                }
            }
        } else if(action == 'Drop'){

            if(treasureChest[command[0]]){
                let droppedItem = treasureChest[command[0]]
                treasureChest.splice(command[0], 1)
                treasureChest.push(droppedItem)
            }
        } else if(action == 'Steal'){

            let countStolenItems = Number(command[0])

                let stolenItems = treasureChest.splice(-countStolenItems)
                console.log(stolenItems.join(', '));  
        }

        command = array.shift()
    }
    if(treasureChest.length > 0){

        let averageGain = 0
        let sum = 0
        for(let item of treasureChest){

            sum += item.length
        }
        averageGain = sum / treasureChest.length
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}

treasureHunt((["Gold|Silver|Bronze|Medallion|Cup",
                "Loot Wood Gold Coins",
                "Loot Silver Pistol",
                "Drop 3",
                "Steal 3",
                "Yohoho!"]))

treasureHunt((["Diamonds|Silver|Shotgun|Gold",
                "Loot Silver Medals Coal",
                "Drop -1",
                "Drop 1",
                "Steal 6",
                "Yohoho!"]))
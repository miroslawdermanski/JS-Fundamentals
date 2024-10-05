function manOwar(input){

    let pirateShipStatus = input.shift().split('>').map(Number)
    let warshipStatus = input.shift().split('>').map(Number)

    let maxHealth = Number(input.shift())

    for(let command of input){

        command = command.split(' ')
        let keyWord = command[0]
        if(keyWord == 'Fire'){

            if(warshipStatus[command[1]] != undefined){

                warshipStatus[command[1]] -= Number(command[2])
                if(warshipStatus[command[1]] <= 0){
                    console.log('You won! The enemy ship has sunken.');
                    return
                }
            }
        } else if(keyWord == 'Defend'){

            if(pirateShipStatus[command[1]] != undefined && pirateShipStatus[command[2]] != undefined){

                for(let i = command[1]; i <= command[2]; i++){

                    pirateShipStatus[i] -= Number(command[3])
                    if(pirateShipStatus[i] <= 0){
                        console.log('You lost! The pirate ship has sunken.');
                        return
                    }
                }
            }
        } else if(keyWord == 'Repair'){

            if(pirateShipStatus[command[1]] != undefined){

                pirateShipStatus[command[1]] += Number(command[2])
                if(pirateShipStatus[command[1]] > maxHealth) pirateShipStatus[command[1]] = maxHealth
            }
        } else if(keyWord == 'Status'){

            let count = 0
            for(let section of pirateShipStatus){

                if(section < 0.2*maxHealth) count++

            }
            console.log(`${count} sections need repair.`);
        } else if(keyWord == 'Retire'){

            break
        }
    }
    let pirateShipSum = 0
    for(let section of pirateShipStatus){

        pirateShipSum += section
    }
    let warshipSum = 0
    for(let section of warshipStatus){

        warshipSum += section
    }
    console.log(`Pirate ship status: ${pirateShipSum}\nWarship status: ${warshipSum}`);
}

manOwar((["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"])
)

manOwar((["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])
)
function muOnline(input){

    let health = 100
    let bitcoins = 0

    let dungeonRooms = input.split('|')
    
    let curRoom = 0
    for(let room of dungeonRooms){

        room = room.split(' ')
        room[1] = Number(room[1])
        curRoom++
        
        switch(room[0]){

            case 'potion':
                let availableToHeal = 100 - health
                if(room[1] > availableToHeal) room[1] = availableToHeal 
                health += room[1]
                console.log(`You healed for ${room[1]} hp.\nCurrent health: ${health} hp.`);
            break;
            case 'chest':
                bitcoins += room[1]   
                console.log(`You found ${room[1]} bitcoins.`); 
            break;
            default:
                let monster = room[0] 
                let attack = room[1]   
                health -= attack
                if(health > 0){
                    console.log(`You slayed ${monster}.`);
                } else {
                    console.log(`You died! Killed by ${monster}.\nBest room: ${curRoom}`)
                    return
                }
        }
    }
    console.log(`You've made it!\nBitcoins: ${bitcoins}\nHealth: ${health}`);
}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")

muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")
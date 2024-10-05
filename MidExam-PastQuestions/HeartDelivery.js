function heartDelivery(array){

    let neighborhood = array.shift().split('@').map(Number)

    let command = array.shift()
    let curHouseIdx = 0
    while(command != 'Love!'){

        command = command.split(' ')
        let jumpLength = Number(command[1])
        curHouseIdx += jumpLength

        if(curHouseIdx >= neighborhood.length){
            curHouseIdx = 0
        }

        if(neighborhood[curHouseIdx] == 0){
            console.log(`Place ${curHouseIdx} already had Valentine's day.`);
        } else {
            neighborhood[curHouseIdx] -= 2
            if(neighborhood[curHouseIdx] == 0){
                console.log(`Place ${curHouseIdx} has Valentine's day.`);
            }
        }

        command = array.shift()
    }
    console.log(`Cupid's last position was ${curHouseIdx}.`);
    let failedHouses = neighborhood.filter(x => x > 0).length

    if(failedHouses > 0){
        console.log(`Cupid has failed ${failedHouses} places.`);
    } else {
        console.log('Mission was successful.');
    }
}

heartDelivery((["10@10@10@2",
                "Jump 1",
                "Jump 2",
                "Love!"]))

heartDelivery((["2@4@2",
                "Jump 2",
                "Jump 2",
                "Jump 8",
                "Jump 3",
                "Jump 1",
                "Love!"]))
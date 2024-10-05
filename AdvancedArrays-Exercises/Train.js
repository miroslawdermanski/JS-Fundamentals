function train(input){

    let wagons = input.shift().split(' ').map(Number)
    let maxCapacityPerWagon = Number(input.shift())

    for(let element of input){

        let command = element.split(' ')
        if(command.includes('Add')) {
            wagons.push(Number(command.pop()))
        } else {
            let newPassengers = Number(command.pop())
            for(let curWagon of wagons){

                if((curWagon + newPassengers) > maxCapacityPerWagon){
                    continue
                } else {
                    wagons[wagons.indexOf(curWagon)] += newPassengers
                    break
                }
            }
        }
    }
    console.log(wagons.join(' '));
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
)
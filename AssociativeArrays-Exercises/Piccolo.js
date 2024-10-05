function piccolo(array){

    let parkingLot = {}

    for(let string of array){

        let [direction, carNumber] = string.split(', ')

        if(direction == 'IN'){

            let carNumArray = carNumber.split('')
            let digitsOfNumber = Number(carNumArray.slice(2, carNumArray.length-2).join(''))
            parkingLot[carNumber] = digitsOfNumber
            
        } else if(direction == 'OUT'){

            delete parkingLot[carNumber]
            
        } 
    }

    let parking = Object.entries(parkingLot)
    .sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0]))

    if(parking.length == 0){

        console.log('Parking Lot is Empty');
    } else {

        parking.forEach(carNum => console.log(carNum[0]))
    }
}

piccolo(['IN, CA2844AA',
        'IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU'])

piccolo(['IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'OUT, CA1234TA'])
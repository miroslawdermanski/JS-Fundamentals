function flightSchedule(matrix){

    let specificSectorFlights = matrix.shift()

    let newlyChangedStatuses = matrix.shift()

    let statusToCheck = matrix.shift()[0]

    let flights = {}

    for(let flight of specificSectorFlights){

        flight = flight.split(' ')
        let key = flight.shift()
        let destination = flight.join(' ')
        let flightObj = {
            Destination: destination
        }

        flights[key] = flightObj
    }

    for(let status of newlyChangedStatuses){

        status = status.split(' ')
        let key = status.shift()
        let newStatus = status.shift()

        if(key in flights){

            flights[key].Status = newStatus
        }
    }

    if(statusToCheck == 'Ready to fly'){

        for(let flightNum in flights){

            if(!flights[flightNum].Status){

                flights[flightNum].Status = 'Ready to fly'
                console.log(flights[flightNum]);
            }
        }
    } else {
        for(let flightNum in flights){

            if(flights[flightNum].Status){

                console.log(flights[flightNum]);
            }
        }
    }
}

flightSchedule([['WN269 Delaware',
                'FL2269 Oregon',
                'WN498 Las Vegas',
                'WN3145 Ohio',
                'WN612 Alabama',
                'WN4010 New York',
                'WN1173 California',
                'DL2120 Texas',
                'KL5744 Illinois',
                'WN678 Pennsylvania'],
                ['DL2120 Cancelled',
                'WN612 Cancelled',
                'WN1173 Cancelled',
                'SK430 Cancelled'],
                ['Cancelled']])

flightSchedule([['WN269 Delaware',
                'FL2269 Oregon',
                'WN498 Las Vegas',
                'WN3145 Ohio',
                'WN612 Alabama',
                'WN4010 New York',
                'WN1173 California',
                'DL2120 Texas',
                'KL5744 Illinois',
                'WN678 Pennsylvania'],
                ['DL2120 Cancelled',
                'WN612 Cancelled',
                'WN1173 Cancelled',
                'SK330 Cancelled'],
                ['Ready to fly']])
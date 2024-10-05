function dMapper(input){

    let pattern = /(=|\/){1}([A-Z]{1}[A-Za-z]{2,})\1/g
    let destinations = []

    let match = pattern.exec(input)
    while(match) {
        let location = match[2]
        destinations.push(location)
        match = pattern.exec(input)
    }
    console.log(`Destinations: ${destinations.join(', ')}`);
    let trPoints = 0
    destinations.forEach(destination => {
        trPoints += destination.length
    })
    console.log(`Travel Points: ${trPoints}`);
}

dMapper('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')

dMapper('ThisIs some InvalidInput')
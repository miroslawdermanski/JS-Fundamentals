function convertCenturies(centuries) {

    let years = centuries*100
    let days = parseInt(years * 365.2422)
    let hours = 24*days
    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${hours*60} minutes`);

}

convertCenturies(1)
convertCenturies(5)
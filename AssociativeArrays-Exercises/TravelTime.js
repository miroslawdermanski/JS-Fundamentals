function travelTime(array){

    let destinations = {}

    for(let string of array){

        let [country, town, cost] = string.split(' > ');

        if(country in destinations){

            if(destinations[country][town]){

                if(destinations[country][town] > cost){
                    destinations[country][town] = cost;
                }
            } else {
                destinations[country][town] = cost;
            }
        } else {

            destinations[country] = {[town]: cost}
        }
    }

    let kvps = Object.entries(destinations).sort((a, b) => a[0].localeCompare(b[0]))

    for(let [country, destinations] of kvps){

        let output = `${country} ->`
        Object.entries(destinations).sort((a, b) => a[1] - b[1])
        .forEach(kvps => output += ` ${kvps[0]} -> ${kvps[1]}`)
        console.log(output);
    }
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"])

travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'])
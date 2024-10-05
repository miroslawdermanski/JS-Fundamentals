function pirates(array){

    let command = array.shift()
    let cities = {}

    while(command !== 'Sail'){

        let [city, population, totalGold] = command.split('||')
        if(cities[city]){
            cities[city][0] += Number(population)
            cities[city][1] += Number(totalGold)
        } else {
            cities[city] = [Number(population), Number(totalGold)]
        }
        command = array.shift()
    }
    command = array.shift()
    while(command !== 'End'){

        command = command.split('=>')
        let action = command.shift()
        if(action == 'Plunder'){

            let [town, people, gold] = command
            if(town in cities){
                cities[town][0] -= Number(people)
                cities[town][1] -= Number(gold)
                console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`)
                if(cities[town][0] == 0 || cities[town][1] == 0){
                    console.log(`${town} has been wiped off the map!`);
                    delete cities[town]
                }
            }
        } else if(action == 'Prosper'){

            let [town, gold] = command
            if(town in cities){
                if(gold < 0){
                    console.log(`Gold added cannot be a negative number!`);
                } else {
                    cities[town][1] += Number(gold)
                    console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town][1]} gold.`);
                }
            }
        }
        command = array.shift()
    }
    let citiesEntries = Object.entries(cities)
    if(citiesEntries.length == 0){
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    } else {
        console.log(`Ahoy, Captain! There are ${citiesEntries.length} wealthy settlements to go to:`);
        citiesEntries.forEach(settlement => {
            console.log(`${settlement[0]} -> Population: ${settlement[1][0]} citizens, Gold: ${settlement[1][1]} kg`);
        })
    }
}

// pirates((["Tortuga||345000||1250",
//         "Santo Domingo||240000||630",
//         "Havana||410000||1100",
//         "Sail",
//         "Plunder=>Tortuga=>75000=>380",
//         "Prosper=>Santo Domingo=>180",
//         "End"]))

pirates((["Nassau||95000||1000",
        "San Juan||930000||1250",
        "Campeche||270000||690",
        "Port Royal||320000||1000",
        "Port Royal||100000||2000",
        "Sail",
        "Prosper=>Port Royal=>-200",
        "Plunder=>Nassau=>94000=>750",
        "Plunder=>Nassau=>1000=>150",
        "Plunder=>Campeche=>150000=>690",
        "End"]))
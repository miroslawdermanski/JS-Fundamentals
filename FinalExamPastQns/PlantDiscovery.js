function planrDiscovery(input){

    const n = Number(input.shift())
    let plantLibrary = {}
    let ratings = {}

    for(let curPlant = 0; curPlant < n; curPlant++){

        let [plant, rarity] = input.shift().split('<->')
        plantLibrary[plant] = rarity
    }
    let command = input.shift()
    while(command != 'Exhibition'){
        command = command.split(': ')
        let action = command.shift()
        if(action == 'Rate'){
            let [plant, rating] = command[0].split(' - ')
            if(!plantLibrary.hasOwnProperty(plant)){
                console.log('error');          
            } else {
                if(!ratings.hasOwnProperty(plant)){
                ratings[plant] = []
                }
                ratings[plant].push(Number(rating))
            }
        } else if(action == 'Update'){
            let [plant, newRarity] = command[0].split(' - ')
            if(plantLibrary.hasOwnProperty(plant)){
                plantLibrary[plant] = newRarity
            } else {
                console.log('error');
            }
        } else if(action == 'Reset'){
            let plant = command[0]
            if(plant in ratings && plant in plantLibrary){
                delete ratings[plant]
            } else {
                console.log('error');
            }
        }
        command = input.shift()
    }
    console.log('Plants for the exhibition:');
    for(let plant in plantLibrary){
        let output = '- '
        output += `${plant}; Rarity: ${plantLibrary[plant]}; `
        if(ratings.hasOwnProperty(plant)){
            let ratingsSum = ratings[plant].reduce(
                (acc, curVal) => acc + curVal, 0
            )
            let avgRate = ratingsSum / ratings[plant].length
            output += `Rating: ${avgRate.toFixed(2)}`
        } else {
            output += `Rating: 0.00`
        }
        console.log(output);
    }
}

planrDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])    

planrDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])
    
function starEnigma(input){

    let messagesCount = +input.shift()
    let letterRegX = /[s t a r S T A R]/
    let planetsType = {Attacked: [], Destroyed: []}
    for(let curMessage = 0; curMessage < messagesCount; curMessage++){

        let message = input.shift()
        let lettersCount = 0      
        message.split('').forEach(char => {
            if(letterRegX.test(char)) lettersCount++
        })
        let decryptedMessage = message.split('').map(char => {
            let newCharCode = char.charCodeAt() - lettersCount
            return String.fromCharCode(newCharCode)
        }).join('')
        
        let infoPattern = /@(?<planet>[A-z]+)[^@\-!:>]*?:(?<population>\d+)[^@\-!:>]*?!(?<type>[AD])![^@\-!:>]*?->(?<count>\d+)/
        let match = infoPattern.exec(decryptedMessage)
        if(match){
            let planet = match.groups.planet
            let type = match.groups.type
            if(type == 'A') planetsType.Attacked.push(planet)
            if(type == 'D') planetsType.Destroyed.push(planet)
        }
    }
    planetsType.Attacked = planetsType.Attacked.sort((a, b) => a.localeCompare(b))
    planetsType.Destroyed = planetsType.Destroyed.sort((a, b) => a.localeCompare(b))
    console.log(`Attacked planets: ${planetsType.Attacked.length}`)
    planetsType.Attacked.forEach(planet => console.log(`-> ${planet}`))
    console.log(`Destroyed planets: ${planetsType.Destroyed.length}`)
    planetsType.Destroyed.forEach(planet => console.log(`-> ${planet}`))
}

starEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR'])

starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'])    
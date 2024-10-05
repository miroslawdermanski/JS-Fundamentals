function heroes(input){

    const heroesCount = +input.shift()

    let heroesList = {}

    for(let curHero = 0; curHero < heroesCount; curHero++){

        let curHeroInfo = input.shift()
        let [heroName, hitPts, manaPts] = curHeroInfo.split(' ')
        heroesList[heroName] = [+hitPts, +manaPts]
    }
    let curCommand = input.shift()
    while(curCommand !== 'End'){
        curCommand = curCommand.split(' - ')
        let action = curCommand.shift()
        let heroName = curCommand.shift()
        if(action == 'CastSpell'){
            let [mpNeeded, spell] = curCommand 
            if(heroesList[heroName][1] >= mpNeeded){
                heroesList[heroName][1] -= Number(mpNeeded)
                console.log(`${heroName} has successfully cast ${spell} and now has ${heroesList[heroName][1]} MP!`)
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spell}!`)
            }
        } else if(action == 'TakeDamage'){
            let [damage, attacker] = curCommand
            heroesList[heroName][0] -= Number(damage)
            if(heroesList[heroName][0] <= 0){
                delete heroesList[heroName]
                console.log(`${heroName} has been killed by ${attacker}!`);
            } else {
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroesList[heroName][0]} HP left!`);
            }
        } else if(action == 'Recharge'){
            let amount = Number(curCommand.shift())
            let availableToRecharge = 200 - heroesList[heroName][1]
            if(amount <= availableToRecharge){
                heroesList[heroName][1] += amount
                console.log(`${heroName} recharged for ${amount} MP!`);
            } else {
                heroesList[heroName][1] += availableToRecharge
                console.log(`${heroName} recharged for ${availableToRecharge} MP!`);
            }
        } else if(action == 'Heal'){
            let amount = Number(curCommand.shift())
            let availableToHeal = 100 - heroesList[heroName][0]
            if(amount <= availableToHeal){
                heroesList[heroName][0] += amount
                console.log(`${heroName} healed for ${amount} HP!`);
            } else {
                heroesList[heroName][0] += availableToHeal
                console.log(`${heroName} healed for ${availableToHeal} HP!`);
            }
        }
        curCommand = input.shift()
    }
    Object.entries(heroesList).forEach(hero => {
        console.log(`${hero[0]}`);
        console.log(`  HP: ${hero[1][0]}`);
        console.log(`  MP: ${hero[1][1]}`);
    })
}

heroes(['2',
   'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'])

heroes(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'])
function inventory(array){

    let heroes = []

    for(let string of array){

        let heroInfo = string.split(' / ')

        let heroName = heroInfo.shift()
        let heroLevel = Number(heroInfo.shift())
        let heroItems = heroInfo.shift()

        let hero = {
            Hero: heroName,
            level: heroLevel,
            items: heroItems
        }
        heroes.push(hero)
    }

    heroes.sort((heroA, heroB) => heroA.level - heroB.level)

    for(let hero of heroes){

        let kvps = Object.entries(hero)
        console.log(`${kvps[0][0]}: ${kvps[0][1]}`);
        console.log(`${kvps[1][0]} => ${kvps[1][1]}`);
        console.log(`${kvps[2][0]} => ${kvps[2][1]}`);
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'])
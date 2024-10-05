function netherRealms(input){

    let demonBook = {}

    const healthPattern = /[^0-9+\-*/\.]/g
    const numbersPattern = /-?\d+(\.\d+)?/g
    const listPattern = /[^,\s]+/g
    let demons = input.match(listPattern)
    for(let demon of demons){
        let totalHealth = 0
        let healthMatch = demon.match(healthPattern)
        if(healthMatch){
            healthMatch.forEach(char => {
                let asciiCode = char.charCodeAt()
                totalHealth += asciiCode
            })
        }
        let baseDamage = 0
        let damageMatch = demon.match(numbersPattern)
        if(damageMatch){
            damageMatch.forEach(num => {
                baseDamage += parseFloat(num)
            })
        }
        let multDivPattern = /[\*\/]/g
        let match = demon.match(multDivPattern)
        if(match){
            match.forEach(x => {
                if(x == '*'){
                    baseDamage *= 2
                } else {
                    baseDamage /= 2
                }
            })
        }
        demonBook[demon] = [totalHealth, baseDamage.toFixed(2)]
    }
    Object.entries(demonBook).sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(demon => {
        console.log(`${demon[0]} - ${demon[1][0]} health, ${demon[1][1]} damage`);
    })
}

netherRealms('M3ph-0.5s-0.5t0.0**')

netherRealms('M3ph1st0**, Azazel')

netherRealms('Gos/ho')
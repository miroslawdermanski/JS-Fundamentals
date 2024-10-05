function legendaryFarming(input){

    let qtyMatArray = input.split(' ')

    let materialBalances = {shards: 0, fragments: 0, motes: 0}

    let keyMaterials = {shards: 'Shadowmourne', fragments: 'Valanyr', motes: 'Dragonwrath'}

    let junkBalances = {}

    for(let curMaterial = 1; curMaterial < qtyMatArray.length; curMaterial+=2){

        let qty = Number(qtyMatArray[curMaterial-1])
        let material = qtyMatArray[curMaterial].toLowerCase()

        if(material in materialBalances){

            materialBalances[material] += qty
            if(materialBalances[material] >= 250){
                materialBalances[material] -= 250
                console.log(`${keyMaterials[material]} obtained!`)
                break;
            }

        } else {

            junkBalances[material] ? 
            junkBalances[material] += qty : 
            junkBalances[material] = qty
            
        }               
    }

    Object.entries(materialBalances).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .forEach(material => console.log(`${material[0]}: ${material[1]}`))

    Object.entries(junkBalances).sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(material => console.log(`${material[0]}: ${material[1]}`))
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')

legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')
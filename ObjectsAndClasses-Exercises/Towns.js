function towns(array){

    for(let string of array){

        let townInfo = string.split(' | ')
        
        let town = {}
        town['town'] = townInfo[0]
        town['latitude'] = Number(townInfo[1]).toFixed(2)
        town['longitude'] = Number(townInfo[2]).toFixed(2)
        console.log(town);
    }

}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])

towns(['Plovdiv | 136.45 | 812.575'])
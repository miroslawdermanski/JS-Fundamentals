function minerTask(array){

    let resources = {}

    for(let i = 0; i < array.length; i+=2){

        let resource = array[i]
        let quantity = Number(array[i+1])

        resources[resource] ? 
        resources[resource] += quantity : 
        resources[resource] = quantity
    }

    Object.entries(resources).forEach(resource => {

        console.log(`${resource[0]} -> ${resource[1]}`);
    })

}

minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'])

minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'])
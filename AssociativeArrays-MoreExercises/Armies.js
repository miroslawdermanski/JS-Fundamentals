function armies(array){

    let army = {}

    for(let string of array){

        if(string.includes(' arrives')){

            army[string.split(' arrives').shift()] = {}
        } else if(string.includes(': ')){

            string = string.split(': ')
            let leader = string.shift()
            if(leader in army){
                
                let [armyName, count] = string.join(', ').split(', ')
                army[leader][armyName] = Number(count)
            }
        } else if(string.includes(' + ')){

            let [armyName, count] = string.split(' + ')
            for(let [leader, armyInfo] of Object.entries(army)){

                if(armyInfo[armyName] !== undefined){
                    army[leader][armyName] += Number(count)
                }
            }
        } else if(string.includes('defeated')){

            let leaderToDefeat = string.split(' defeated').shift()

            if(leaderToDefeat in army){
                delete army[leaderToDefeat]
            }
        }
    }

    let sortedArmy = Object.entries(army)
    .sort(([aArmy, aCount], [bArmy, bCount]) => {

        let aSum = Object.values(aCount).reduce((acc, val) => acc + val, 0)
        let bSum = Object.values(bCount).reduce((acc, val) => acc + val, 0)
        return bSum - aSum
    })

    sortedArmy.forEach(([leader, army]) => {

        console.log(`${leader}: ${Object.values(army).reduce((acc, val) => acc + val, 0)}`)

        Object.entries(army).sort((a, b) => b[1] - a[1])
        .forEach(([armyName, count]) => {

            console.log(`>>> ${armyName} - ${count}`);
        })
    })
}

armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 
        'Rick Burr: Juard, 50000', 'Findlay arrives', 
        'Findlay: Britox, 34540', 'Wexamp + 6000', 
        'Juard + 1350', 'Britox + 4500', 'Porter arrives', 
        'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 
        'Porter: Retix, 3205'])

armies(['Rick Burr arrives', 'Findlay arrives', 
        'Rick Burr: Juard, 1500', 'Wexamp arrives', 
        'Findlay: Wexamp, 34540', 'Wexamp + 340', 
        'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423'])
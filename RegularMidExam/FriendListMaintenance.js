function friendListMaintenance(input){

    let friends = input.shift().split(', ')

    let command = input.shift()
    while(command != 'Report'){

        command = command.split(' ')
        let action = command.shift()

        if(action == 'Blacklist'){

            let name = command.shift()
            if(friends.includes(name)){
                let nameIdx = friends.indexOf(name)
                friends.splice(nameIdx, 1, 'Blacklisted')
                console.log(`${name} was blacklisted.`);
            } else {
                console.log(`${name} was not found.`);
            }
        } else if(action == 'Error'){

            let idx = Number(command.shift())
            if(friends[idx] != undefined && friends[idx] != 'Blacklisted' && friends[idx] != 'Lost'){
                let name = friends[idx]
                friends.splice(idx, 1, 'Lost')
                console.log(`${name} was lost due to an error.`);
            }
        } else if(action == 'Change'){

            let idx = command.shift()
            let newName = command.shift()

            if(friends[idx] != undefined){
                let oldName = friends[idx]
                friends.splice(idx, 1, newName)
                console.log(`${oldName} changed his username to ${newName}.`);
            }
        }

        command = input.shift()
    }
    let blacklistedCount = friends.filter(username => username == 'Blacklisted').length
    let lostCount = friends.filter(username => username == 'Lost').length
    console.log(`Blacklisted names: ${blacklistedCount}`);
    console.log(`Lost names: ${lostCount}`);
    console.log(friends.join(' '));
}

friendListMaintenance((["Mike, John, Eddie",
                        "Blacklist Mike",
                        "Error 0",
                        "Report"]))

friendListMaintenance((["Mike, John, Eddie, William",
                        "Error 3",
                        "Error 3",
                        "Change 0 Mike123",
                        "Report"]))

friendListMaintenance((["Mike, John, Eddie, William",
                        "Blacklist Maya",
                        "Error 1",
                        "Change 4 George",
                        "Report"]))
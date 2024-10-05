function tseamAcc(array){

    let tseamAccount = array[0].split(' ')

    let index = 1
    while(array[index] != 'Play!'){

        let currCommand = array[index].split(' ')
        switch(currCommand[0]){

            case 'Install': 
                if(!tseamAccount.includes(currCommand[1])){
                    tseamAccount.push(currCommand[1])
                } 
                break
            case 'Uninstall': 
                if(tseamAccount.includes(currCommand[1])){
                    tseamAccount.splice(tseamAccount.indexOf(currCommand[1]), 1)
                }
                break
            case 'Update':
                if(tseamAccount.includes(currCommand[1])){
                    tseamAccount.splice(tseamAccount.indexOf(currCommand[1]), 1)
                    tseamAccount.push(currCommand[1])
                }
                break
            case 'Expansion':
                let tempArray = currCommand[1].split('-')
                let game = tempArray[0]
                let expansion = tempArray[1]
                if(tseamAccount.includes(game)){   
                    let newGame = game + `:${expansion}`               
                    let newGameIndex = tseamAccount.indexOf(game) + 1
                    tseamAccount.splice(newGameIndex, 0, newGame)
                }  
                break
        }
        index++
    }
    console.log(tseamAccount.join(' '));

}

// tseamAcc(['CS WoW Diablo',
//             'Install LoL','Uninstall WoW','Update Diablo','Expansion CS-Go','Play!'])
// tseamAcc(['CS WoW Diablo',
//             'Uninstall XCOM','Update PeshoGame','Update WoW','Expansion Civ-V','Play!'])
tseamAcc(['CS WoW Diablo',
            'Install LoL','Uninstall WoW','Update Diablo','Expansion CS-Go','Play!'])
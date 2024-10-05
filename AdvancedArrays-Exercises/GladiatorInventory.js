function gladiatorInventory(input){

    let inventory = input.shift().split(' ')
    
    for(let command of input){

        command = command.split(' ')
        let equipment = command[1]
        switch(command[0]){

            case 'Buy':
                if(!inventory.includes(equipment)) inventory.push(equipment)
            break;
            case 'Trash':
                if(inventory.includes(equipment)) inventory.splice(inventory.indexOf(equipment), 1)   
            break;
            case 'Repair':
                if(inventory.includes(equipment)) inventory.splice(inventory.indexOf(equipment), 1)
                    inventory.push(equipment);   
            break;
            case 'Upgrade':
                equipment = equipment.split('-')
                let element = equipment[0]
                let upgrade = equipment[1]
                equipment = `${element}:${upgrade}`
                if(inventory.includes(element)){
                    let idx = inventory.indexOf(element)
                    inventory.splice(idx+1, 0, equipment)
                }   
            break;                   
        }
    }
    console.log(inventory.join(' '));
}

gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']
)

gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']
)
function inventory(array){

    let journal = array.shift().split(', ')

    let command = array.shift()
    while(command != 'Craft!'){

        command = command.split(" - ")
        let action = command.shift()

        if(action == 'Combine Items'){

            let itemArray = command.shift().split(':')
            let oldItem = itemArray.shift()
            let newItem = itemArray.shift()
            if(journal.includes(oldItem)){

                journal.splice(journal.indexOf(oldItem)+1, 0, newItem)
            }
        } else {

            let item = command.shift()
            if(action == 'Collect'){
                
                if(!journal.includes(item)){

                    journal.push(item)
                }
            }
            if(action == 'Drop'){

                if(journal.includes(item)){

                    let idx = journal.indexOf(item)
                    journal.splice(idx, 1)
                }
            }
            if(action == 'Renew'){

                if(journal.includes(item)){

                    let temp = item
                    let idx = journal.indexOf(item)
                    journal.splice(idx, 1)
                    journal.push(temp)
                }
            }
        }
        command = array.shift()
    }
    console.log(journal.join(', '));
}

inventory([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'])

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'])
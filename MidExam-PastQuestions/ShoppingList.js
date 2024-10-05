function shoppingList(input){

    let list = input.shift().split('!');
    
    let command = input.shift()

    while(command != 'Go Shopping!'){

        command = command.split(' ')
        let itemCondition = command.shift()

        if(itemCondition == 'Correct'){

            let oldItem = command.shift()
            let newItem = command.shift()
            if(list.includes(oldItem)){
                list[list.indexOf(oldItem)] = newItem
            }
        } else {
            
            let item = command.shift()
            if(itemCondition == 'Urgent'){

                if(!list.includes(item)){
                    list.unshift(item)
                }
            }
            if(itemCondition == 'Unnecessary'){

                if(list.includes(item)){

                    list.splice(list.indexOf(item), 1)
                }
            }
            if(itemCondition == 'Rearrange'){

                let temp = item
                if(list.includes(item)){

                    list.splice(list.indexOf(item), 1)
                    list.push(temp)
                }
            }
        }
        command = input.shift()
    }
    console.log(list.join(', '));
}

shoppingList((["Tomatoes!Potatoes!Bread",
                "Unnecessary Milk",
                "Urgent Tomatoes",
                "Go Shopping!"]))

shoppingList((["Milk!Pepper!Salt!Water!Banana",
                "Urgent Salt",
                "Unnecessary Grapes",
                "Correct Pepper Onion",
                "Rearrange Grapes",
                "Correct Tomatoes Potatoes",
                "Go Shopping!"]))
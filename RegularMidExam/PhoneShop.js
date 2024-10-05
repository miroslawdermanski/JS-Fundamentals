function phoneShop(input){

    let phoneList = input.shift().split(', ')
    let command = input.shift()

    while(command != 'End'){

        command = command.split(' - ')
        let action = command.shift()

        if(action == 'Bonus phone'){

            let phones = command.shift().split(':')
            let oldPhone = phones.shift()
            let newPhone = phones.shift()
            if(phoneList.includes(oldPhone)){

                let oldPhoneIdx = phoneList.indexOf(oldPhone)
                phoneList.splice(oldPhoneIdx+1, 0, newPhone)
            }
        } else {

            let phone = command.shift()
            if(action == 'Add'){

                if(!phoneList.includes(phone)){
                    phoneList.push(phone)
                }
            } else if(action == 'Remove'){

                if(phoneList.includes(phone)){
                    let index = phoneList.indexOf(phone)
                    phoneList.splice(index, 1)
                }
            } else if(action == 'Last'){

                if(phoneList.includes(phone)){

                    let temp = phone
                    let phoneIdx = phoneList.indexOf(phone)
                    phoneList.splice(phoneIdx, 1)
                    phoneList.push(temp)
                }
            }
        }

        command = input.shift()
    }
    console.log(phoneList.join(', '));
}

phoneShop((["SamsungA50, MotorolaG5, IphoneSE",
            "Add - Iphone10",
            "Remove - IphoneSE",
            "End"]))

phoneShop((["HuaweiP20, XiaomiNote",
            "Remove - Samsung",
            "Bonus phone - XiaomiNote:Iphone5",
            "End"]))

phoneShop((["SamsungA50, MotorolaG5, HuaweiP10",
            "Last - SamsungA50",
            "Add - MotorolaG5",
            "End"]))
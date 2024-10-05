function arrayModifier(array){

    let integersArray = array.shift().split(' ').map(Number)
    
    for(let command of array){

        if(command != 'end'){

            command = command.split(' ')
            let action = command.shift()
            
            if(action == 'decrease'){

                integersArray = integersArray.map(x => x - 1)

            } else {

                let index1 = Number(command[0])
                let temp1 = Number(integersArray[index1])
                let index2 = Number(command[1])
                let temp2 = Number(integersArray[index2])
                if(action == 'swap'){
                
                    integersArray.splice(index1, 1, temp2)
                    integersArray.splice(index2, 1, temp1)
                }
                if(action == 'multiply'){

                    let element = temp1*temp2
                    integersArray.splice(index1, 1, element)
                }
            } 
        } else {
            break;
        }
    }

    console.log(integersArray.join(', '));
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'])

arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'])
function arrayManipulator(array1, array2){

    for(let command of array2){

        command = command.split(' ')
        
        let order = command.shift()

        switch(order){

            case 'add':
                array1.splice(command[0], 0, Number(command[1]))
                break;
            case 'addMany':
                let index = Number(command.shift())
                while(command.length > 0){
                    
                    let item = Number(command.shift())
                    array1.splice(index, 0, item)
                    index++
                }
                break;
            case 'contains':
                let element = Number(command.shift())
                console.log(array1.includes(element) ? 
                            array1.indexOf(element) : -1)
                break;
            case 'remove':
                let indexOfItem = command.shift()
                array1.splice(indexOfItem, 1)
                break;
            case 'shift':
                let positions = command.shift() 
                while(positions > 0){

                    let element = array1.shift()
                    array1.push(element)
                    positions--
                } 
                break;
            case 'sumPairs':
                let newArray = []
                for(let i = 0; i < array1.length; i+=2){

                    let sum = 0
                    sum += array1[i] + (array1[i+1] == undefined ? 0: array1[i+1])
                    newArray.push(sum)
                }
                array1 = newArray
                break;
            case 'print':
                console.log(`[ ${array1.join(', ')} ]`);
                return        
        }
    }

}

arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print'])
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])
arrayManipulator([2, 2, 4, 2, 4],
    ["add 1 4", "sumPairs", "print"])
arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"])
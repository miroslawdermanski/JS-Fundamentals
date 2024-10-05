function ladybugs(input){

    let fieldSize = Number(input[0])
    let fieldArray = new Array(fieldSize).fill(0)
    let bugIndexesArray = input[1].split(' ').map(Number)

    for(let element of bugIndexesArray){

        if(element >= 0 && element < fieldSize){
            fieldArray[element] = 1
        }

    }
    
    for(let currCommandIndex = 2; currCommandIndex < input.length; currCommandIndex++){

        let commandArray = input[currCommandIndex].split(' ')
        let currentIndex = Number(commandArray[0])
        let direction = commandArray[1]
        let flyLength = Number(commandArray[2])
        
        if(fieldArray[currentIndex] == 1){
 
            fieldArray[currentIndex] = 0
            let newIndex = currentIndex
            
            for(let i = 0; i < fieldSize; i++){

                if(direction == 'right'){
                    newIndex += flyLength
                } else if(direction == 'left'){
                    newIndex -= flyLength
                }

                if(newIndex < 0 || newIndex >= fieldSize){
                    break
                }

                if(fieldArray[newIndex] == 0){
                    fieldArray[newIndex] = 1
                    break
                }

            }
        }
    }
    console.log(fieldArray.join(' '));

}

ladybugs([ 3, '0 1','0 right 1','2 right 1'])
//ladybugs([ 3, '0 1 2','0 right 1','1 right 1','2 right 1'])
//ladybugs([ 5, '3','3 left 2','1 left -2'])
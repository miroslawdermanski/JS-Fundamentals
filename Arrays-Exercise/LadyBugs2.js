function ladybugs(array){

    let fieldSize = array[0]

    let populatedField = new Array(fieldSize).fill(0)
    let indecesOfLadybugsArray = array[1].split(' ').map(Number)

    for(let curIndex of indecesOfLadybugsArray){

        if(curIndex >= 0 && curIndex < fieldSize) populatedField[curIndex] = 1
    }

    for(let curCommandIndx = 2; curCommandIndx < array.length; curCommandIndx++){

        let command = array[curCommandIndx].split(' ')
        let startPosition = Number(command[0])
        let direction = command[1]
        let distance = Number(command[2])

        if(populatedField[startPosition] == 1){

            populatedField[startPosition] = 0

            if(direction == 'left'){

                let newPosition = startPosition - distance; 
                if(newPosition >= 0){

                    while(populatedField[newPosition] == 1){
                        newPosition -= distance
                    }
                    if(newPosition >= 0) populatedField[newPosition] = 1                  
                } 
            } else {
                      
                let newPosition = startPosition + distance; 
                if(newPosition < populatedField.length){

                    while(populatedField[newPosition] == 1){
                        newPosition += distance
                    }
                    if(newPosition < populatedField.length) populatedField[newPosition] = 1
                }
                    
            }

        }
    }

    console.log(populatedField.join(' '));
}

ladybugs([ 3, '0 1','0 right 1','2 right 1' ])
//ladybugs([ 3, '0 1 2','0 right 1','1 right 1','2 right 1'])
//ladybugs([ 5, '3','3 left 2','1 left -2'])
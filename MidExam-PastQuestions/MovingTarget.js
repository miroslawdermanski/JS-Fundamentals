function movingTarget(input){

    let targetSequence = input.shift().split(' ').map(Number)

    let command = input.shift()

    while(command != 'End'){

        let tokens = command.split(' ')
        let action = tokens.shift()
        let index = Number(tokens.shift())

        if(action == 'Shoot'){

            let power = Number(tokens.shift())
            shoot(index, power)
        } else if(action == 'Add'){

            let value = Number(tokens.shift())
            add(index, value)
        } else if(action == 'Strike'){

            let radius = Number(tokens.shift())
            strike(index, radius)
        }
        command = input.shift()
    }
    console.log(targetSequence.join('|'));

    function shoot(index, power){

        if(targetSequence[index]){
            targetSequence[index] -= power
            if(targetSequence[index] <= 0){
                targetSequence.splice(index, 1)
            }
        }
    }

    function add(index, value){

        if(targetSequence[index]){
            targetSequence.splice(index, 0, value)
        } else {
            console.log('Invalid placement!');
        }  
    }

    function strike(index, radius){

        if(targetSequence[index]){
            if(targetSequence[index-radius] != undefined && targetSequence[index+radius] != undefined){
                targetSequence.splice(index-radius, radius*2+1)
            } else {
                console.log('Strike missed!');
            }
        }
    }
}

movingTarget((["52 74 23 44 96 110",
                "Shoot 5 10",
                "Shoot 1 80",
                "Strike 2 1",
                "Add 22 3",
                "End"]))

movingTarget((["1 2 3 4 5",
                "Strike 0 1",
                "End"]))
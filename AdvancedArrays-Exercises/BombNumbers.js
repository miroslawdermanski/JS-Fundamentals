function bombNumbers(sequence, bombNumAndItsPower){

    let bombNum = bombNumAndItsPower[0]
    let powerBombNum = bombNumAndItsPower[1]

    for(let element of sequence){

        if(element == bombNum){

            let startDetonationIndex = sequence.indexOf(element)-powerBombNum
            if(startDetonationIndex < 0) startDetonationIndex = 0

            let elementsToDelete = sequence.indexOf(element) == 0 ? powerBombNum*2 : powerBombNum*2+1
            
            sequence.splice(startDetonationIndex, elementsToDelete, 0)
        }
    }
    let sum = 0
    for(let element of sequence) sum += element
    console.log(sum);

}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3])
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1])
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1])
bombNumbers([2, 2, 1, 4, 2], [4, 5])
bombNumbers([2, 2, 2, 4, 1], [1, 0])
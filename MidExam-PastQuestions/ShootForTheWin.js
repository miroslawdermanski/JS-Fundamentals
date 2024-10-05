function shootForTheWin(input){

    let targetsSequence = input.shift().split(' ').map(Number)
    
    let index = input.shift()
    let countShotTargets = 0

    while(index != 'End'){

        index = Number(index)
        if(targetsSequence[index] != undefined && targetsSequence[index] != -1){

                let currentTarget = targetsSequence[index]
                targetsSequence[index] = -1
                countShotTargets++

                for(let i = 0; i < targetsSequence.length; i++){
                    
                    if(targetsSequence[i] != -1){

                        if(targetsSequence[i] <= currentTarget){
                            targetsSequence[i] += currentTarget
                        } else {
                            targetsSequence[i] -= currentTarget
                        }
                    }                  
                }           
        }
        index = input.shift()
    }
    console.log(`Shot targets: ${countShotTargets} -> ${targetsSequence.join(' ')}`);
}

shootForTheWin((["24 50 36 70",
                    "0",
                    "4",
                    "3",
                    "1",
                    "End"]))

shootForTheWin((["30 30 12 60 54 66",
                "5",
                "2",
                "4",
                "0",
                "End"]))
function theLift(array){

    let liftQueue = Number(array.shift())
    let currentLiftState = array.shift().split(' ').map(Number)

    for(let curWagon = 0; curWagon < currentLiftState.length; curWagon++){

        if(liftQueue > 0){

            while(currentLiftState[curWagon] < 4){

                if(liftQueue > 0){

                liftQueue--;
                currentLiftState[curWagon]++;
                } else {
                    console.log(`The lift has empty spots!\n${currentLiftState.join(' ')}`);
                    return;
                }          
            }
        } else {
            if(curWagon == currentLiftState.length-1){
                console.log(`${currentLiftState.join(' ')}`);
            } else {
                console.log(`The lift has empty spots!\n${currentLiftState.join(' ')}`);
            }
            
            return;
        }
    }
    if(liftQueue > 0){
        console.log(`There isn't enough space! ${liftQueue} people in a queue!\n${currentLiftState.join(' ')}`);
    } else {
        console.log(`${currentLiftState.join(' ')}`);
    }
}

theLift([
    "15",
    "0 0 0 0"
   ])

theLift([
    "20",
    "0 2 0"
   ])

theLift([
"8",
"0 0"
])
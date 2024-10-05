function memoryGame(array){

    let sequence = array.shift().split(' ')
    let moves = 0

    for(let command of array){
        moves++

        if(command != 'end'){

            command = command.split(' ').map(Number)
            let integerOne = command[0]
            let integerTwo = command[1]
            
            if((integerOne == integerTwo) || (integerOne < 0 || integerOne >= sequence.length) || (integerTwo < 0 || integerTwo >= sequence.length)){

                let newPair = `-${moves}a`
                sequence.splice(sequence.length/2, 0, newPair, newPair)
                console.log("Invalid input! Adding additional elements to the board");
            } else {

                if(sequence[integerOne] == sequence[integerTwo]){

                    console.log(`Congrats! You have found matching elements - ${sequence[integerOne]}!`);
                    sequence = sequence.filter(element => element != sequence[integerOne]) 
                    if(sequence.length == 0) break;                  
                } else {
                    console.log("Try again!");
                }
            }
        } else {
            break;
        }
    }
    if(sequence.length > 0){
        console.log(`Sorry you lose :(\n${sequence.join(' ')}`);
    } else {
        console.log(`You have won in ${moves} turns!`);
    }
}

memoryGame([
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"])

memoryGame([
    "a 2 4 a 2 4", 
    "0 3", 
    "0 2",
    "0 1",
    "0 1", 
    "end"])

memoryGame([
    "a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"])
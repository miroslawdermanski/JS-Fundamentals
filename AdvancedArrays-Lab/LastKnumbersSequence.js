function lastKnumbersSequence(n, k){

    let output = [1]

    for(let i = 1; i < n; i++){

    let sum = 0

        for(let element of output.slice(-k, output.length)){

            sum += element
        }

    output.push(sum)
    }
    console.log(output.join(' '));
    
}

lastKnumbersSequence(6, 3)
lastKnumbersSequence(8, 2)
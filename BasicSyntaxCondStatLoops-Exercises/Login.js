function login(input){

    let realPassword = ''
    for(let i = input[0].length-1; i >= 0; i--){
        realPassword += input[0][i]
    }
    
    let index = 1
    let incorrectTriesCount = 0
    while(input[index] != realPassword){

        incorrectTriesCount++
        if(incorrectTriesCount == 4){
            console.log(`User ${input[0]} blocked!`)
            break
        }
        console.log('Incorrect password. Try again.');
        index++
    }
    if(incorrectTriesCount < 4){
        console.log(`User ${input[0]} logged in.`);
    }

}

login(['sunny','rainy','cloudy','sunny','not sunny'])
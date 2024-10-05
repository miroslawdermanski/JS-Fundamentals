function numbers(input){

    let sequence = input.split(' ').map(Number)
    let averageNum = 0
    let sum = 0
    for(let integer of sequence){

        sum += integer
    }
    averageNum = sum / sequence.length

    let result = []
    for(let integer of sequence){

        if(integer > averageNum){
            result.push(integer)
        }
    }
    if(result.length < 1){
        console.log('No');
        return;
    } else {

        result.sort((a, b) => b - a)
        while(result.length > 5){

            result.pop()
        }
        console.log(result.join(' '));
    }
    
}

numbers('10 20 30 40 50')

numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')

numbers('1')

numbers('-1 -2 -3 -4 -5 -6')
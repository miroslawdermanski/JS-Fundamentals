function secretChat(input){

    let message = input.shift()
    let command = input.shift()

    while(command !== 'Reveal'){
        command = command.split(':|:')
        let action = command.shift()
        if(action == 'InsertSpace'){
            let idx = command.shift()
            message = message.substring(0, idx) + ' ' + message.substring(idx)
            console.log(message);
        } else if(action == 'Reverse'){
            let substr = command.shift()
            if(message.includes(substr)){
                let reverseSubstr = substr.split('').reverse().join('')
                message = message.replace(substr, reverseSubstr)
                console.log(message);
            } else {
                console.log('error');
            }
        } else if(action == 'ChangeAll'){
            let substr = command.shift()
            let replacement = command.shift()
            while(message.includes(substr)){
                message = message.replace(substr, replacement)
            }
            console.log(message);
        }
        command = input.shift()
    }
    console.log(`You have a new text message: ${message}`);
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'])

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'])
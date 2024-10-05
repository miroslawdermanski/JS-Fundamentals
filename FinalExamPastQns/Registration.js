function register(input){

    let username = input.shift()
    let command = input.shift()
    while(command !== 'Registration'){
        command = command.split(' ')
        let action = command.shift()
        if(action == 'Letters'){
            if(command[0] == 'Lower'){
                username = username.toLowerCase()
            } else {
                username = username.toUpperCase()
            }
            console.log(username);
        } else if(action == 'Reverse'){
            let [startIdx, endIdx] = command
            endIdx++
            if(username[startIdx] != undefined && username[endIdx] != undefined){
                let substring = username.substring(startIdx, endIdx)
                substring = substring.split('').reverse().join('')
                console.log(substring);
            }
        } else if(action === 'Substring'){
            let substr = command.shift()
            if(username.includes(substr)){
                username = username.replace(substr, '')
                console.log(username);
            } else {
                console.log(`The username ${username} doesn't contain ${substr}.`);
            }
        } else if(action === 'Replace'){
            let char = command.shift()
            while(username.includes(char)){
                username = username.replace(char, '-')
            }
            console.log(username);
        } else if(action === 'IsValid'){
            let char = command.shift()
            if(username.includes(char)){
                console.log('Valid username.');
            } else {
                console.log(`${char} must be contained in your username.`);
            }
        }
        command = input.shift()
    }
}

// register(['John','Letters Lower','Substring SA', 
//     'IsValid @', 'Registration'])

register(['ThisIsSoftUni', 'Reverse 1 3', 
    'Replace S', 'Substring hi', 'Registration'])
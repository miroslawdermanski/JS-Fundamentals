function decryptCommands(input){

    let str = input.shift()
    let command = input.shift()
    while(command !== 'Finish'){
        command = command.split(' ')
        let action = command.shift()
        if(action == 'Replace'){
            let [curChar, newChar] = command
            str = str.split(curChar).join(newChar)
            console.log(str);
        } else if(action == 'Cut'){
            let [startIdx, endIdx] = command
            if(str[startIdx] != undefined && str[endIdx++] != undefined){
                let subStr = str.substring(startIdx, endIdx)
                str = str.replace(subStr, '')
                console.log(str);
            } else {
                console.log('Invalid indices!');
            }
        } else if(action == 'Make'){
            let letCase = command.shift()
            if(letCase == 'Upper'){
                str = str.toUpperCase()
            } else {
                str = str.toLowerCase()
            }
            console.log(str);
        } else if(action == 'Check'){
            let strToCheck = command.shift()
            if(str.includes(strToCheck)){
                console.log(`Message contains ${strToCheck}`);
            } else {
                console.log(`Message doesn't contain ${strToCheck}`);
            }
        } else if(action == 'Sum'){
            let [startIdx, endIdx] = command
            if(str[startIdx] != undefined && str[endIdx++] != undefined){
                let sum = 0
                let subStr = str.substring(startIdx, endIdx)
                subStr.split('').forEach(char => {
                    sum += char.charCodeAt(0)
                })
                console.log(sum);
            } else {
                console.log('Invalid indices!');
            }
        }
        command = input.shift()
    }
}

decryptCommands(["ILikeSoftUni",
    "Replace I We",
    "Make Upper",
    "Check SoftUni",
    "Sum 1 4",
    "Cut 1 4",
    "Finish"])    

decryptCommands(["HappyNameDay",
    "Replace p r",
    "Make Lower",
    "Cut 2 23",
    "Sum -2 2",
    "Finish"])    
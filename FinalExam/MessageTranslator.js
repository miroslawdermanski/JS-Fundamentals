function messageTranslator(input){

    let stringsCount = Number(input.shift())
    let pattern = /(!{1})(?<command>[A-Z]{1}[a-z]{2,})\1:\[(?<string>[A-Za-z]{8,})\]/g
    for(let i = 0; i < stringsCount; i++){
        let curStr = input[i]
        let match = pattern.exec(curStr)
        if(match){
            let command = match.groups.command
            let string = match.groups.string
            let output = ''
            output += `${command}: `
            for(let i = 0; i < string.length; i++){
                let charCode = string.charCodeAt(i)
                output += `${charCode} `
            }
            console.log(output);
        } else {
            console.log('The message is invalid');
        }
    }
}

messageTranslator(["2",
    "!Send!:[IvanisHere]",
    "*Time@:[Itis5amAlready"])    

messageTranslator(["3",
    "go:[outside]",
    "!drive!:YourCarToACarWash",
    "!Watch!:[LordofTheRings]"])    
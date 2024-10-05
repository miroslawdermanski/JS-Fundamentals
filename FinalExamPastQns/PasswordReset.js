function reset(input){

    let str = input.shift()
    let curCommand = input.shift()

    while(curCommand !== 'Done'){
        if(curCommand.includes('TakeOdd')){
            str = str.split('')
            let newPass = ''
            for(let i = 1; i < str.length; i += 2){
                newPass += str[i]
            }
            str = newPass
            console.log(str);
        } else if(curCommand.includes('Cut')){
            let index = Number(curCommand.split(' ')[1])
            let length = Number(curCommand.split(' ')[2])
            let substr = str.split('').splice(index, length).join('')
            if(str.includes(substr)){
                str = str.replace(substr, '')
                console.log(str);
            }
        } else if(curCommand.includes('Substitute')){
            let substring = curCommand.split(' ')[1]
            let substitute = curCommand.split(' ')[2]
            if(str.includes(substring)){
                while(str.includes(substring)){
                    str = str.replace(substring, substitute)
                }
                console.log(str);
            } else {
                console.log('Nothing to replace!');
            }
        }   
        curCommand = input.shift()   
    }
    console.log(`Your password is: ${str}`);
}

reset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])

reset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])
function imitationGame(array){

    let txt = array.shift()
    let command = array.shift()

    while(command !== 'Decode'){

        let [action, ...tokens] = command.split('|')
        if(action == 'Move'){
            let n = Number(tokens[0])
            let substring = txt.slice(0,n)
            txt = txt.substring(n) + substring
        } else if(action == 'Insert'){
            let index = Number(tokens[0])
            let value = tokens[1]
            txt = txt.substring(0,index) + value + txt.substring(index)
        } else if(action == 'ChangeAll'){
            let substring = tokens[0]
            let replacement = tokens[1]
            while(txt.includes(substring)){
                txt = txt.replace(substring, replacement)
            }
        }
        command = array.shift()
    }
    console.log(`The decrypted message is: ${txt}`);
}

imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'])

imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'])
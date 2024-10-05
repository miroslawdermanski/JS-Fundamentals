function houseParty(array){

    let list = []
    for(let curInput of array){

        curInput = curInput.split(' ')
        if(!curInput.includes('not')){
            
            list.includes(curInput[0]) ? 
            console.log(`${curInput[0]} is already in the list!`)
            : list.push(curInput.shift())
        } else {
            
            list.includes(curInput[0]) ?
            list.splice(list.indexOf(curInput[0]), 1)
            : console.log(`${curInput[0]} is not in the list!`);
        }
    }
    console.log(list.join('\n'));

}

houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!'])

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])
function race(input){

    let participantsList = input.shift().split(', ')
    let participantsTable = {}
    let pattern = /(\w)/g
    let command = input.shift()
    while(command != 'end of race'){
        let match = command.match(pattern)
        let name = ''
        let score = 0
        match.forEach(char => {
            if(isNaN(char)){
                name += char
            } else {
                score += Number(char)
            }
        })
        if(participantsList.includes(name)){
            if(participantsTable.hasOwnProperty(name)){
                participantsTable[name] += score
            } else {
                participantsTable[name] = score
            }
        }
        command = input.shift()
    }
    let sortedList = Object.entries(participantsTable).sort((a, b) => b[1] - a[1])
    console.log(`1st place: ${sortedList[0][0]}`);
    console.log(`2nd place: ${sortedList[1][0]}`);
    console.log(`3rd place: ${sortedList[2][0]}`);
}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])

race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race'])
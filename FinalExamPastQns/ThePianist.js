function pianist(input){

    const piecesCount = Number(input.shift())
    let piecesList = {}
    for(let curPiece = 0; curPiece < piecesCount; curPiece++){
        let pieceInfo = input.shift()
        let [pieceName, composer, key] = pieceInfo.split('|')
        piecesList[pieceName] = [composer, key]
    }
    let command = input.shift()
    while(command !== 'Stop'){
        command = command.split('|')
        let action = command.shift()
        if(action == 'Add'){
            let [piece, composer, key] = command
            if(!piecesList.hasOwnProperty(piece)){
                piecesList[piece] = [composer, key]
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${piece} is already in the collection!`);
            }
        } else if(action == 'Remove'){
            let piece = command.shift()
            if(piece in piecesList){
                delete piecesList[piece]
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if(action == 'ChangeKey'){
            let [piece, newKey] = command
            if(piece in piecesList){
                piecesList[piece][1] = newKey
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
        command = input.shift()
    }
    Object.entries(piecesList).forEach(piece => {
        console.log(`${piece[0]} -> Composer: ${piece[1][0]}, Key: ${piece[1][1]}`)
    })
}

pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
])

// pianist([
//     '4',
//     'Eine kleine Nachtmusik|Mozart|G Major',
//     'La Campanella|Liszt|G# Minor',
//     'The Marriage of Figaro|Mozart|G Major',
//     'Hungarian Dance No.5|Brahms|G Minor',
//     'Add|Spring|Vivaldi|E Major',
//     'Remove|The Marriage of Figaro',
//     'Remove|Turkish March',
//     'ChangeKey|Spring|C Major',
//     'Add|Nocturne|Chopin|C# Minor',
//     'Stop'
// ])
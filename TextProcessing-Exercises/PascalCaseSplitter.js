function pascalSplitter(string){

    let capLetterIdxs = []
    for(let letterIdx = 0; letterIdx < string.length; letterIdx++){
        if(string[letterIdx] == string[letterIdx].toUpperCase()){
            capLetterIdxs.push(letterIdx)
        }     
    }
    let result = []
    for(let i = 0; i < capLetterIdxs.length; i++){
        let startIdx = capLetterIdxs[i]
        let endIdx = i + 1 < capLetterIdxs.length ? capLetterIdxs[i+1] : string.length
        let word = string.substring(startIdx, endIdx)
        result.push(word)
    }
    console.log(result.join(', '));
}

//pascalSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')

//pascalSplitter('HoldTheDoor')

pascalSplitter('ThisIsSoAnnoyingToDo')
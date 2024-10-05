function wordsTracker(array){

    let target = array.shift().split(' ')

    let occurences = {}

    for(let word of target){

        occurences[word] = 0
    }

    for(let curWord of array){

        if(target.includes(curWord)){

            occurences[curWord]++
        }
           
    }

     let counterPairs = Object.entries(occurences)

    counterPairs.sort((a, b) => b[1] - a[1])
    
    for(let [word, occrs] of counterPairs){

        console.log(`${word} - ${occrs}`)
    }
}

wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 
    'count', 'the', 'occurrences', 'of', 'the', 'words', 
    'this', 'and', 'sentence', 'because', 'this', 'is', 
    'your', 'task'])

wordsTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 
    'another', 'the', 'And', 'finally', 
    'the', 'the', 'sentence'])
function mirrorWords(input){

    let text = input.shift()
    let pattern = /([@|\#]){1}(?<word1>[a-zA-Z]{3,})\1\1(?<word2>[a-zA-Z]{3,})\1/g

    let pairs = {}
    let validPairsCount = 0

    let matches = pattern.exec(text)
    while(matches){
        validPairsCount++
        let wordOne = matches[2]
        let wordTwo = matches[3]
        if(wordOne == wordTwo.split('').reverse().join('')){
            pairs[wordOne] = wordTwo
        }
        matches = pattern.exec(text)
    }
    let pairsArray = Object.entries(pairs)
    if(validPairsCount == 0){
        console.log('No word pairs found!');
    } else {
        console.log(`${validPairsCount} word pairs found!`);
    }
    if(pairsArray.length == 0){
        console.log('No mirror words!');
    } else {
        console.log('The mirror words are:');
        let pairsStr = `${pairsArray[0][0]} <=> ${pairsArray[0][1]}`
        pairsArray.shift()
        while(pairsArray.length > 0){
            pairsStr += `, ${pairsArray[0][0]} <=> ${pairsArray[0][1]}`
            pairsArray.shift()
        }
        console.log(`${pairsStr}`);
    }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ])

mirrorWords([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ])
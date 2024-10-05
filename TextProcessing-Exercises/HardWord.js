function hardWord(array){

    let letter = array[0]
    let words = array[1]

    let letterArr = letter.split(' ')
    for(let word of letterArr){

        if(word.includes('_')){
            if(word[word.length-1] != '_') word = word.replace(word[word.length-1], '')
            let newWord = words.filter(x => x.length == word.length)[0]
            letter = letter.replace(word, newWord)
        }
    }
    console.log(letter);
}

hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])
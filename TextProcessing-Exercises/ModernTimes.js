function modernTimes(string){

    string = string.split(' ')

    let pattern = /\b[A-Za-z]+\b/
    for(let word of string){

        if(word.startsWith('#') && word.length > 1 && pattern.test(word)){
            word = word.replace(word[0], '')
            console.log(word);
        }
    }
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')

modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')
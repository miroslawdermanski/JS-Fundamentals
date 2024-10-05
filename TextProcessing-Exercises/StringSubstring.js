function substring(word, text){

    if(text.toLowerCase().split(' ').includes(word.toLowerCase())){
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }

}

substring('javascript',
'JavaScript is the best programming language')

substring('python',
'JavaScript is the best programming language')
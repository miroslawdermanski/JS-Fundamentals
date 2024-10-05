function countStrOccr(text, word){

    let counter = 0
    text = text.split(' ').forEach(el => {
        if(el == word){
        counter++
        }
    })
    console.log(counter);
}

countStrOccr('This is a word and it also is a sentence',
'is')

countStrOccr('softuni is great place for learning new programming languages',
'softuni')
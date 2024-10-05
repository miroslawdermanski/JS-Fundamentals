function wordOccurrences(array){

    let wordOccurences = {}

    for(let string of array){

        if(!wordOccurences.hasOwnProperty(string)){

            wordOccurences[string] = 1;
        } else {
            wordOccurences[string]++;
        }
    }

    let pairs = Object.entries(wordOccurences).sort((a, b) => b[1] - a[1])
    pairs.forEach(word => {
        console.log(`${word[0]} -> ${word[1]} times`)
    })

}

wordOccurrences(["Here", "is", "the", "first", "sentence", 
                "Here", "is", "another", "sentence", "And", 
                "finally", "the", "third", "sentence"])

wordOccurrences(["dog", "bye", "city", "dog", "dad",
                 "boys", "ginger"])
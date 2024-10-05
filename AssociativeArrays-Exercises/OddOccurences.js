function occurences(input){

    input = input.split(' ').map(word => word.toLowerCase())

    let wordOccurences = {}

    for(let word of input){

        if(wordOccurences[word]){

            wordOccurences[word]++
        } else {

            wordOccurences[word] = 1
        }
    }

    let output = ''
    Object.entries(wordOccurences).forEach(word => {

        if(Number(word[1]) % 2 != 0){

            output += `${word[0]} `
        }
    })
    console.log(output)

}

occurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')

occurences('Cake IS SWEET is Soft CAKE sweet Food')
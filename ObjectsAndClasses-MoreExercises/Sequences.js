function sequences(array){

    let arrayCollection = []
    for(let string of array){

        string = JSON.parse(string)
        string.sort((a, b) => b - a)
        string = JSON.stringify(string)

        if(!arrayCollection.includes(string)){
        
        arrayCollection.push(string)    
        }  
    }

    arrayCollection = arrayCollection.map(string => JSON.parse(string))
    .sort((a, b) => a.length - b.length)

    for(let array of arrayCollection){

        array = array.join(', ')
        console.log(`[${array}]`);
    }
}

sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
            "[10, 1, -17, 0, 2, 13]",
            "[4, -3, 3, -2, 2, -1, 1, 0]"])

sequences(["[7.14, 7.180, 7.339, 80.099]",
            "[7.339, 80.0990, 7.140000, 7.18]",
            "[7.339, 7.180, 7.14, 80.099]"])
function commonElements(array1, array2){

    for(let i = 0; i < array1.length; i++){

        let currentElement = array1[i]
        for(let k = 0; k < array2.length; k++){

            if(currentElement === array2[k]){
                console.log(currentElement);
            }
        }
    }

}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l'])
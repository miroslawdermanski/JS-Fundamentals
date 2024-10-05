function listOfProducts(array){

    let sorted = array.sort()
    for(let element of sorted){

        console.log(`${sorted.indexOf(element)+1}.${element}`);
    }

}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
listOfProducts(['Watermelon', 'Banana', 'Apples'])
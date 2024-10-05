function reverseInPlace(arrayOfStrings){

    for(let i = 0; i < arrayOfStrings.length / 2; i++){

        let temporary =  arrayOfStrings[i]
        arrayOfStrings[i] = arrayOfStrings[arrayOfStrings.length - 1 - i]
        arrayOfStrings[arrayOfStrings.length - 1 - i] = temporary
    }
    console.log(arrayOfStrings.join(' '));

}

reverseInPlace(['a', 'b', 'c', 'd', 'e'])
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop'])
reverseInPlace(['33', '123', '0', 'dd'])
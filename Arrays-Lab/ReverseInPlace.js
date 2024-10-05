function reverseInPlace(arrayOfStrings){

    let result = ''
    for(let i = arrayOfStrings.length - 1; i >= 0; i--){

        result += arrayOfStrings[i] + ' '
    }
    console.log(result);
}

reverseInPlace(['a', 'b', 'c', 'd', 'e'])
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop'])
reverseInPlace(['33', '123', '0', 'dd'])
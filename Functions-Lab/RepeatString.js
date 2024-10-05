function repeatString(string, n){

    let buffer = ''

    while(n > 0){

        buffer += `${string}`
        n--
    }
    return buffer

}

console.log(repeatString('abc', 3))
console.log(repeatString('String', 2))
function nXnMatrix(num){

    let buffer = ''
    for(let i = 1; i <= num; i++){

        buffer += `${num} `.repeat(num)
        buffer += '\n'
    }
    console.log(buffer);

}

nXnMatrix(3)
nXnMatrix(7)
nXnMatrix(2)
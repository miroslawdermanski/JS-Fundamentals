function drawTriangleOfNumbers(n){

    let buffer = ''
    for(let i = 1; i <= n; i++){
        
        for(let j = 1; j <= i; j++) {
            buffer += i
            buffer += ' '
        }
        buffer += '\n'
    }
    console.log(buffer);

}

drawTriangleOfNumbers(6)
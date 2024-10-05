function rotateArray(array){

    let rotations = Number(array.pop())
    
    while(rotations > 0){

        let lastEl = array[array.length-1]
        
        for(let i = array.length-1; i >= 0; i--){

            array[i] = array[i-1]
        }
        array[0] = lastEl
    rotations--
    }
    console.log(array.join(' '));
}

rotateArray(['1', '2', '3', '4', '2'])
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])
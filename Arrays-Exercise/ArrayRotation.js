function rotateArray(array, rotations){

    while(rotations > 0){

        let temporary = array[0]
        array[array.length] = temporary
        for(let i = 1; i < array.length; i++){

            array[i-1] = array[i]
        }
        array.pop()
        rotations--
    }
    console.log(array.join(' '));

}

rotateArray([51, 47, 32, 61, 21], 2)
rotateArray([32, 21, 61, 1], 4)
rotateArray([2, 4, 15, 31], 5)
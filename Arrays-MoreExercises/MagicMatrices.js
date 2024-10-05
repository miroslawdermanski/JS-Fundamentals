function magicMatrices(matrix){

    let n = matrix.length
    let isMagic = true
    let row1Sum = 0
    let col1Sum = 0

    for(let i = 0; i < n; i++){

        let curRowSum = 0
        for(let j = 0; j < n; j++){

            curRowSum += matrix[i][j]          
        }
        if(i == 0){
            row1Sum = curRowSum
        }
        if(curRowSum != row1Sum){
            isMagic = false
            break
        }
    }

    for(let i = 0; i < n; i++){

        let curColSum = 0
        for(let j = 0; j < n; j++){

            curColSum += matrix[j][i]
        }
        if(i == 0){
            col1Sum = curColSum
        }
        if(curColSum != col1Sum){
            isMagic = false
            break
        }
    }
    console.log(isMagic ? 'true':'false');
    
}

//magicMatrices([[4, 5, 6],[6, 5, 4],[5, 5, 5]])
//magicMatrices([[11, 32, 45],[21, 0, 1],[21, 1, 1]])
magicMatrices([[1, 0, 0],[0, 0, 1],[0, 1, 0]])
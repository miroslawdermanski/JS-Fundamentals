function equalNeighbors(matrix){

    let pairsCount = 0

    for(let curArray = 0; curArray < matrix.length; curArray++){

        for(let curElement = 0; curElement < matrix[curArray].length; curElement++){

            let item = matrix[curArray][curElement]

            // Check right neighbor
            if(curElement < matrix[curArray].length - 1){
                if(item == matrix[curArray][curElement+1]){
                    pairsCount++
                }
            }

            // Check bottom neighbor
            if(curArray < matrix.length - 1){
                if(item == matrix[curArray+1][curElement]){
                    pairsCount++
                }
            }          
            
        }

    }
  
    console.log(pairsCount);
}

equalNeighbors([[2, 2, 5, 7, 4],
                [2, 0, 5, 3, 4],
                [2, 5, 5, 4, 2]])

equalNeighbors([['2', '3', '4', '7', '0'],
                ['4', '0', '5', '3', '4'],
                ['2', '3', '5', '4', '2'],
                ['9', '8', '7', '5', '4']]
)

equalNeighbors([['test', 'yo', 'yo', 'ho'],
                ['well', 'done', 'no', '6'],
                ['not', 'done', 'yet', '5']]
)

equalNeighbors([[2, 2, 5, 7, 4],
                [4, 0, 5, 3, 4],
                [2, 5, 5, 4, 2]])

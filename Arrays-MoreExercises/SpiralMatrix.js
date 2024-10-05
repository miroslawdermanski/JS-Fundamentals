function spiralMatrix(rowLength, columnLength){

    //Initialise an empty matrix with the given dimensions
    let spiralMatrix = Array.from({length: rowLength}, () => Array(columnLength).fill(0))
    
    //Define the boundaries of the spiral
    let top = 0
    let bottom = rowLength - 1
    let left = 0
    let right = columnLength - 1

    let num = 1//Starting number

    while(top <= bottom && left <= right){

        //Traverse from left to right along the top boundary
        for(let i = left; i <= right; i++){

            spiralMatrix[top][i] = num++
        }
        top++;//Move the top boundary down

        //Traverse from top to bottom along the right boundary
        for(let i = top; i <= bottom; i++){

            spiralMatrix[i][right] = num++
        }
        right--; //Move the right boundary left

        if(top <= bottom){

            //Traverse from right to left along the bottom boundary
            for(let i = right; i >= left; i--){

                spiralMatrix[bottom][i] = num++
            }
            bottom--;//Move the bottom boundary up
        }

        if(left <= right){

            //Traverse from bottom to top along the left boundary
            for(let i = bottom; i >= top; i--){

                spiralMatrix[i][left] = num++
            }
            left++//Move the left boundary right
        }
    }

    spiralMatrix.forEach(array => console.log(array.join(' ')))
    
}

spiralMatrix(5, 5)
spiralMatrix(3, 3)
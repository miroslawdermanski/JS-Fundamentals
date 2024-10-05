function diagonalAttack(array){

    let diagonal1Sum = 0; let diagonal2Sum = 0
    
    let matrix = array.map(row => row.split(' ').map(Number))
    let size = matrix.length

    //Calculate the sums of both main diagonals
    for(let i = 0; i < size; i++){

        diagonal1Sum += matrix[i][i]
        diagonal2Sum += matrix[i][size - 1 - i]
    }

    //Check if the sums are equal
    if(diagonal1Sum == diagonal2Sum){

        //Modify the matrix by setting every element not in the diagonal
        //to the diagonal sum
        for(let i = 0; i < size; i++){

            for(let j = 0; j < size; j++){

                if(i != j && i != size-1-j){
                    matrix[i][j] = diagonal1Sum
                }
            }
        }
    }

    matrix.forEach(row => console.log(row.join(' ')))

}

diagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1'])
// diagonalAttack(['1 1 1',
// '1 1 1',
// '1 1 0'])
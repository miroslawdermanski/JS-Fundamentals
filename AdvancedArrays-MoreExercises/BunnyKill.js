function bunnyKill(matrix){

    let coordinatesArray = matrix.pop().split(' ')

    let totalBunniesKilled = 0
    let totalDamage = 0
    
    for(let coordinate of coordinatesArray){

        coordinate = coordinate.split(',').map(Number)

        for(let curRow = 0; curRow < matrix.length; curRow++){

            if(curRow == coordinate[0]){
                
                let row = matrix[curRow].split(' ').map(Number)

                if(row[coordinate[1]] > 0){
                totalDamage += row[coordinate[1]]

                if(row[coordinate[1] + 1] != undefined && row[coordinate[1] + 1] > 0){
                    row[coordinate[1] + 1] -= row[coordinate[1]]
                }
                if(row[coordinate[1] - 1] != undefined && row[coordinate[1] - 1] > 0){
                    row[coordinate[1] - 1] -= row[coordinate[1]]
                }
                if(matrix[curRow-1] != undefined){

                    let upRow = matrix[curRow-1].split(' ').map(Number)
                    if(upRow[coordinate[1]] > 0){
                        upRow[coordinate[1]] -= row[coordinate[1]]
                    }
                    if(upRow[coordinate[1] - 1] > 0 && upRow[coordinate[1] - 1] != undefined){
                        upRow[coordinate[1] - 1] -= row[coordinate[1]]
                    }
                    if(upRow[coordinate[1] + 1] > 0 && upRow[coordinate[1] + 1] != undefined){
                        upRow[coordinate[1] + 1] -= row[coordinate[1]]
                    }
                    matrix[curRow-1] = upRow.join(' ')
                } 
                if(matrix[curRow+1] != undefined){

                    let downRow = matrix[curRow+1].split(' ').map(Number)
                    if(downRow[coordinate[1]] > 0){
                        downRow[coordinate[1]] -= row[coordinate[1]]
                    }
                    if(downRow[coordinate[1] - 1] > 0 && downRow[coordinate[1] - 1] != undefined){
                        downRow[coordinate[1] - 1] -= row[coordinate[1]]
                    }
                    if(downRow[coordinate[1] + 1] > 0 && downRow[coordinate[1] + 1] != undefined){
                        downRow[coordinate[1] + 1] -= row[coordinate[1]]
                    }
                    matrix[curRow+1] = downRow.join(' ')
                } 
                row[coordinate[1]] = 0
                totalBunniesKilled++

                matrix[curRow] = row.join(' ')
                }
            }
        
        }
    }
    
    for(let row of matrix){

        let rowArray = row.split(' ').map(Number)
        for(let cell of rowArray){

            if(cell > 0){
                totalDamage += cell
                totalBunniesKilled++
            }
        }
    }
    console.log(`${totalDamage}\n${totalBunniesKilled}`);
}

bunnyKill(['5 10 15 20',
            '10 10 10 10',
            '10 15 10 10',
            '10 10 10 10',
            '2,2 0,1'])

bunnyKill(['10 10 10',
            '10 10 10', 
            '10 10 10',
            '0,0'])

bunnyKill(['10 10 10',
            '10 10 10', 
            '10 10 10',
            '0,0'])
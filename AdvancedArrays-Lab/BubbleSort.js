function bubbleSort(array){

    for(let j = 0; j < array.length - 1; j++){

        for(let i = 0; i < array.length - 1 - j; i++){

            if(compare(array[i], array[i+1])){
    
                swap(array, i, i+1)
            }
        }
    }

}

function swap(array, i, j){

    let temp = array[i]
    array[i] = array[j]
    array[j] = temp 
}

function compare(a, b){

    return a > b
}
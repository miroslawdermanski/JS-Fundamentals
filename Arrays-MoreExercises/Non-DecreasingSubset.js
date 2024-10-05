function nonDecSubset(array){

    let curBigNum = array[0]
    let newArr = []
    for(let element of array){

        if(element >= curBigNum){
            curBigNum = element
            newArr.push(element)
        } else {
            continue
        }
    }
    console.log(newArr.join(' '));

}

nonDecSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24])
nonDecSubset([ 1, 2, 3, 4])
nonDecSubset([ 20, 3, 2, 15, 6, 1])
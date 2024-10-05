function nonDecSubset(array){

    let curBigNum = Number.NEGATIVE_INFINITY
    let output = array.filter(curNum => {
        if(curNum >= curBigNum){
            curBigNum = curNum
            return true
        }
        return false
    })
    console.log(output.join(' '));

}

nonDecSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24])
nonDecSubset([ 1, 2, 3, 4])
nonDecSubset([ 20, 3, 2, 15, 6, 1])
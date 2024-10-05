function searchForNumber(array1, array2){

    let [limit, deletionList, wantedNum] = array2

    let newArray = array1.slice(0, limit)
    newArray.splice(0, deletionList)

    let occurenceQty = 0
    for(let element of newArray){

        if(element == wantedNum) occurenceQty++
    }
    console.log(`Number ${wantedNum} occurs ${occurenceQty} times.`);
}

searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3])
searchForNumber([7, 1, 5, 8, 2, 7], [3, 1, 5])
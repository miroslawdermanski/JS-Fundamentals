function reverseArrayOfNums(n, array){

    let newArray = []
    for(let i = 0; i < n; i++){

        newArray.push(array[i])
    }
    let result = ''
    for(let i = newArray.length - 1; i >= 0; i--){

        result += newArray[i] + ' '
    }
    console.log(result);

}

reverseArrayOfNums(3, [10,20,30,40,50])
reverseArrayOfNums(4, [-1,20,99,5])
reverseArrayOfNums(2, [66,43,75,89,47])
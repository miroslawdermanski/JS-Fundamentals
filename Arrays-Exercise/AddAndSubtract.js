function addAndSubtract(array){

    let sum1 = 0
    let sum2 = 0
    for(let i = 0; i < array.length; i++){

        sum1 += array[i]
        if(array[i] % 2 == 0){
            array[i] += i
        } else {
            array[i] -= i
        }
        sum2 += array[i]
    }
    console.log(array);
    console.log(`${sum1}\n${sum2}`);

}

addAndSubtract([5, 15, 23, 56, 35])
addAndSubtract([-5, 11, 3, 0, 2])
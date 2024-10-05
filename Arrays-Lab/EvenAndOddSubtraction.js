function evenOddSubtraction(array){

    let evenSum = 0; let oddSum = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            evenSum += array[i]
        } else {
            oddSum += array[i]
        }
    }
    console.log(evenSum-oddSum);
}

evenOddSubtraction([1,2,3,4,5,6])
evenOddSubtraction([3,5,7,9])
evenOddSubtraction([2,4,6,8,10])
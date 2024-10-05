function equalSums(array){

    let output = ''
    if(array.length < 2){
        output = 0
    } else {
        let matchSum = false
        for(let i = 1; i < array.length - 1; i++){

            let leftSum = 0; let rightSum = 0;
            for(let leftIndex = 0; leftIndex < i; leftIndex++){
                leftSum +=  array[leftIndex];
            }
            for(let rightIndex = i+1; rightIndex < array.length; rightIndex++){
                rightSum += array[rightIndex];
            }
            if(leftSum == rightSum){
                matchSum = true;
                output = i
                break
            }
        }
        if(!matchSum){
            output = "no"
        }
    }
    console.log(output);

}

equalSums([1, 2, 3, 3])
equalSums([1, 2])
equalSums([1])
equalSums([1, 2, 3])
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])
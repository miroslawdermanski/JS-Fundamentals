function sumEvenNums(array){

    let sum = 0
    for(let i = 0; i < array.length; i++){

        if(Number(array[i]) % 2 == 0){
            sum += Number(array[i])
        }
    }
    console.log(sum);

}

sumEvenNums(['1','2','3','4','5','6'])
sumEvenNums(['3','5','7','9'])
sumEvenNums(['2','4','6','8','10'])
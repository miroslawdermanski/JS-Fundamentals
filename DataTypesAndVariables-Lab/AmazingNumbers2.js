function isNumberAmazing(number){

    let sum = 0
    for(let i = 0; i < String(number).length ; i++){
        sum += Number(String(number)[i])
    }

    let output = String(sum).includes('9')

    console.log(output ?
        `${number} Amazing? True` : `${number} Amazing? False`);

}

isNumberAmazing(1233)
isNumberAmazing(999)
function isNumberAmazing(number){

    let sum = 0
    for(let i = 0; i < String(number).length ; i++){
        sum += Number(String(number)[i])
    }

    let has9 = 'False'
    for(let k = 0; k < String(sum).length ; k++) {
        if(String(sum)[k] == 9){
            has9 = 'True'
            break
        }
    }

    console.log(`${number} Amazing? ${has9}`);

}

isNumberAmazing(1233)
isNumberAmazing(999)
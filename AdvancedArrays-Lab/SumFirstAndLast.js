function sumFirstLast(array){

    let firstEl = Number(array.shift())
    let lastEl = Number(array.pop())
    console.log(firstEl + lastEl);

}

sumFirstLast(['20', '30', '40'])
sumFirstLast(['5', '10'])
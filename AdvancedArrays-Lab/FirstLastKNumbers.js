function firstLastKNumbers(array){

    let k = array.shift()
    console.log(array.slice(0, k).join(' '));
    console.log(array.slice(-k, array.length).join(' '));

}

firstLastKNumbers([2, 7, 8, 9])
firstLastKNumbers([3, 6, 7, 8, 9])
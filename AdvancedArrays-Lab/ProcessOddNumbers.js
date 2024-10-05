function processOddNums(array){

    let result = array.filter((element, index) => index % 2 != 0)
                        .reverse()
                        .map(element => element * 2)
                        .join(' ')
    console.log(result);

}

processOddNums([10, 15, 20, 25])
processOddNums([3, 0, 10, 4, 7, 3])
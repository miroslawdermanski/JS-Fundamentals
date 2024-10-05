function signCheck(num1, num2, num3){

    let negativeNumsCount = 0
    if(num1 < 0) negativeNumsCount++
    if(num2 < 0) negativeNumsCount++
    if(num3 < 0) negativeNumsCount++

    return negativeNumsCount % 2 == 0 ? 'Positive':'Negative'

}

console.log(signCheck(5, 12, -15))
console.log(signCheck(-6, -12, 14))
console.log(signCheck(-1, -2, -3))
console.log(signCheck(-5, 1, 1))
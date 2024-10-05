function curReverse(input){

    let halfOne = ''
    let halfTwo = ''

    let middleIdx = input.length / 2
    halfOne = input.substring(0, middleIdx)
    halfTwo = input.substring(middleIdx)

    halfOne = halfOne.split('').reverse().join('')
    halfTwo = halfTwo.split('').reverse().join('')
    console.log(`${halfOne}\n${halfTwo}`)
}

curReverse('tluciffiDsIsihTgnizamAoSsIsihT')

curReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')
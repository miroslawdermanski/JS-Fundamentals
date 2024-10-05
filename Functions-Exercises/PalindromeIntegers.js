function palindromeInts(array){

    for(let curEl of array){

        console.log(checkForPalindrome(curEl));
    }

    function checkForPalindrome(number){

        let numString = String(number)
        let reversedNumStr = ''
        for(let i = numString.length-1; i >= 0; i--){
            reversedNumStr += numString[i]
        }

        return reversedNumStr == number
    }
}

palindromeInts([123,323,421,121])
palindromeInts([32,2,232,1010])
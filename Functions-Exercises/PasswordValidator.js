function passwordValidator(password){

    let passLength = checkPassLength(password)
    let lettersAndDigits = checkForLettersDigits(password)
    let minimum2Digits = checkForMin2Digits(password)
    if(!passLength) console.log("Password must be between 6 and 10 characters");
    if(!lettersAndDigits) console.log("Password must consist only of letters and digits");
    if(!minimum2Digits) console.log("Password must have at least 2 digits");

    if(passLength && lettersAndDigits && minimum2Digits) console.log("Password is valid");

    function checkPassLength(pass){

        let correctLength = (pass.length >= 6 && pass.length <= 10) ? true : false
        return correctLength
    }

    function checkForLettersDigits(pass){

        let consistsOfLettAndDigits = true
        for(let currChar of pass){

            let currCharCode = currChar.charCodeAt(0)
            if(
                !((currCharCode >= 48 && currCharCode <= 57) ||
                (currCharCode >= 65 && currCharCode <= 90) ||
                (currCharCode >= 97 && currCharCode <= 122))
            ){
                consistsOfLettAndDigits = false
                break
            }
        }
        return consistsOfLettAndDigits
    }

    function checkForMin2Digits(pass){

        let digitCounter = 0
        for(let currChar of pass){

            let currCharCode = currChar.charCodeAt(0)
            if(currCharCode >= 48 && currCharCode <= 57){
                digitCounter++
            }
        }
        if(digitCounter > 1){
            return true
        } else {
            return false
        }
    }

}

passwordValidator('logIn')
passwordValidator('MyPass123')
passwordValidator('Pa$s$s')
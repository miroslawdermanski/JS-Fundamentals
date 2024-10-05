function printTriplesOfN(n){

    for(let firstLetter = 0; firstLetter < n; firstLetter++){

        for(let secondLetter = 0; secondLetter < n; secondLetter++){

            for(let thirdLetter = 0; thirdLetter < n; thirdLetter++){

                letterOne = String.fromCharCode(97+firstLetter);
                letterTwo = String.fromCharCode(97+secondLetter);
                letterThree =  String.fromCharCode(97+thirdLetter)
                console.log(`${letterOne}${letterTwo}${letterThree}`);
            }
        }

    }

}

printTriplesOfN(3)
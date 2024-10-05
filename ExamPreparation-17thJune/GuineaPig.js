function guineaPig(input){

    let foodFor30DaysInGrams = Number(input.shift())*1000
    let hayFor30DaysInGrams = Number(input.shift())*1000
    let coverFor30DaysInGrams = Number(input.shift())*1000
    let pigWeightInGrams = Number(input.shift())*1000

    for(let curDay = 1; curDay <= 30; curDay++){

        foodFor30DaysInGrams -= 300
        if(curDay % 2 == 0){

            hayFor30DaysInGrams -= 0.05*foodFor30DaysInGrams
        }
        if(curDay % 3 == 0){

            coverFor30DaysInGrams -= pigWeightInGrams/3
        }

        if(foodFor30DaysInGrams <= 0 || hayFor30DaysInGrams <= 0 || coverFor30DaysInGrams <= 0){
            console.log('Merry must go to the pet store!');
            return
        }
    }
    console.log(`Everything is fine! Puppy is happy! Food: ${(foodFor30DaysInGrams/1000).toFixed(2)}, Hay: ${(hayFor30DaysInGrams/1000).toFixed(2)}, Cover: ${(coverFor30DaysInGrams/1000).toFixed(2)}.`)
}

guineaPig((["10", 
"5", 
"5.2", 
"1"])
)

guineaPig((["1", 
"1.5", 
"3", 
"1.5"])
)

guineaPig((["9",
"5",
"5.2",
"1"])
)
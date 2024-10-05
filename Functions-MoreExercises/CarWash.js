function carWash(commands){

    let conditionOfCar = 0

    for(let curCommand of commands){

        switch(curCommand){

            case 'soap': conditionOfCar += 10; break
            case 'water': conditionOfCar = conditionOfCar*1.2; break
            case 'vacuum cleaner': conditionOfCar = conditionOfCar*1.25; break
            case 'mud': conditionOfCar = conditionOfCar*0.9; break
        }
    }
    console.log(`The car is ${conditionOfCar.toFixed(2)}% clean.`);

}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])
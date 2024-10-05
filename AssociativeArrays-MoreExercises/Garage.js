function garage(array){

    let garages = {}

    array.forEach(string => {

        let [garage, carInfo] = string.split(' - ')
        if(!garages.hasOwnProperty(garage)) garages[garage] = []

        let carInfoAssArr = {}
        carInfo = carInfo.split(', ')
        for(let info of carInfo){

            let [key, value] = info.split(': ')
            carInfoAssArr[key] = value
        }
        garages[garage].push(carInfoAssArr)
    })

    let kvps = Object.entries(garages)

    for(let [garageNum, cars] of kvps){

        console.log(`Garage № ${garageNum}`)
        cars.forEach(car => {

            let info = '--- '
            car = Object.entries(car)
            for(let kvp of car){

                info += `${kvp[0]} - ${kvp[1]}`
                if(car.indexOf(kvp) < car.length-1) info += ', '
            }
            console.log(info);
        })
    }
}

garage(['1 - color: blue, fuel type: diesel', 
        '1 - color: red, manufacture: Audi', 
        '2 - fuel type: petrol', 
        '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])

garage(['1 - color: green, fuel type: petrol',
        '1 - color: dark red, manufacture: WV',
        '2 - fuel type: diesel',
        '3 - color: dark blue, fuel type: petrol'])
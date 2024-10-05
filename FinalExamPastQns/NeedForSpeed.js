function needForSpeed(input){

    const n = Number(input.shift())
    let cars = {}

    for(let curCar = 0; curCar < n; curCar++){

        let car = input.shift()
        let [carModel, mileage, fuel] = car.split('|')
        mileage = Number(mileage)
        fuel = Number(fuel)
        cars[carModel] = {mileage, fuel}
    }
    let command = input.shift()
    while(command !== 'Stop'){

        command = command.split(' : ')
        let action = command.shift()
        command = command.join()
        if(action == 'Drive'){
            let [car, distance, fuel] = command.split(',')
            distance = Number(distance)
            fuel = Number(fuel)
            if(cars[car].fuel >= fuel){
                cars[car].mileage += distance
                cars[car].fuel -= fuel
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                if(cars[car].mileage >= 100000){
                    console.log(`Time to sell the ${car}!`);
                    delete cars[car]
                }
            } else {
                console.log(`Not enough fuel to make that ride`);
            }
        } else if(action == 'Refuel'){
            let [car, fuel] = command.split(',')
            fuel = Number(fuel)
            let avblTofuel = 75 - cars[car].fuel 
            if(fuel > avblTofuel){
                let refueled = 75 - cars[car].fuel
                console.log(`${car} refueled with ${refueled} liters`);
                cars[car].fuel = 75
            } else {
                cars[car].fuel += fuel
                console.log(`${car} refueled with ${fuel} liters`);
            }
        } else if(action == 'Revert'){
            let [car, kms] = command.split(',')
            kms = Number(kms)
            cars[car].mileage -= kms
            if(cars[car].mileage < 10000){
                cars[car].mileage = 10000
            } else {
                console.log(`${car} mileage decreased by ${kms} kilometers`);
            }
        }
        command = input.shift()
    }
    for(let car in cars){
        console.log(`${car} -> Mileage: ${cars[car].mileage} kms, Fuel in the tank: ${cars[car].fuel} lt.`)
    }
}

//  needForSpeed([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop'])

needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop']) 
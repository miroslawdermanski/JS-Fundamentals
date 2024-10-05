function bakeryShop(input){

    let stock = {}
    let totalSoldFood = 0

    let command = input.shift()
    while(command != 'Complete'){
        command = command.split(' ')
        let action = command.shift()
        let [quantity, food] = command
        if(action == 'Receive'){
            if(food in stock && quantity > 0){
                stock[food] += Number(quantity)
            } else {
                if(quantity > 0)
                stock[food] = Number(quantity)
            }
        } else if(action == 'Sell'){
            if(!stock.hasOwnProperty(food)){
                console.log(`You do not have any ${food}.`);
            } else {
                if(stock[food] < quantity){
                    totalSoldFood += stock[food]
                    console.log(`There aren't enough ${food}. You sold the last ${stock[food]} of them.`);
                    delete stock[food]
                } else {
                    totalSoldFood += +quantity
                    stock[food] -= +quantity
                    console.log(`You sold ${quantity} ${food}.`);
                    if(stock[food] == 0){
                        delete stock[food]
                    }
                }
            }
        }
        command = input.shift()
    }
    Object.entries(stock).forEach(item => {
        console.log(`${item[0]}: ${item[1]}`)
    })
    console.log(`All sold: ${totalSoldFood} goods`);
}

bakeryShop(['Receive 105 cookies',
    'Receive 10 donuts',
    'Sell 10 donuts',
    'Sell 1 bread',
    'Complete'])
    

bakeryShop(['Receive 10 muffins',
    'Receive 23 bagels',
    'Sell 5 muffins',
    'Sell 10 bagels',
    'Complete'])    
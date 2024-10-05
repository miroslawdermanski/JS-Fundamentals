function barIncome(input){

    let curOrder = input.shift()
    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%\.]*<(?<product>\w+)>[^|$%\.]*\|[^|$%\.]*?(?<count>\d+)[^|$%\.]*\|[^|$%\.]*?(?<price>\d+\.?\d*)\$/

    let totalIncome = 0
    while(curOrder !== 'end of shift'){
        let match = pattern.exec(curOrder)
        if(match !== null){
            let {customer, product, count, price} = match.groups
            let totalPrice = count * price
            totalIncome += totalPrice
            console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
        }
        curOrder = input.shift()
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

barIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])

barIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'])
function orders(product, quantity){

    let totalPrice = 0
    switch(product){
        case 'coffee': totalPrice = 1.50*quantity; break
        case 'water': totalPrice = 1*quantity; break
        case 'coke': totalPrice = 1.40*quantity; break
        case 'snacks': totalPrice = 2*quantity; break
    }
    return totalPrice.toFixed(2)

}

console.log(orders("water", 5))
console.log(orders("coffee", 2))
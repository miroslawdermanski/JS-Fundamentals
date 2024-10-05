function storage(array){

    let map = new Map()

    for(let string of array){

        string = string.split(' ')
        let product = string.shift()
        let quantity = Number(string.shift())

        if(!map.has(product)){

            map.set(product, quantity)
        } else {

            let currentQuantity = map.get(product)
            let newQuantity = currentQuantity += quantity
            map.set(product, newQuantity)
        }
    }

    for(let [product, qty] of map){

        console.log(`${product} -> ${qty}`);
    }

}

storage(['tomatoes 10',
        'coffee 5',
        'olives 100',
        'coffee 40'])

storage(['apple 50',
        'apple 61',
        'coffee 115',
        'coffee 40'])
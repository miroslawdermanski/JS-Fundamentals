function storeProvision(stock, orderedProducts){

    let products = {};

    for(let i = 0; i < stock.length; i+=2){

        let productName = stock[i]
        let quantity = Number(stock[i+1])

        products[productName] = quantity
    }

    for(let k = 0; k < orderedProducts.length; k += 2){

        let productName = orderedProducts[k]
        let quantity = Number(orderedProducts[k+1])

        if(productName in products){

            products[productName] += quantity
        } else {
            products[productName] = quantity
        }
    }

    let tuples = Object.entries(products)
    for(let [key, value] of tuples){

        console.log(`${key} -> ${value}`);
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)

storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
)
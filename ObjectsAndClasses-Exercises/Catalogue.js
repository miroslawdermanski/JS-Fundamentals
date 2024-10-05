function catalogue(array){

    let products = []

    for(let product of array){

        let [name, price] = product.split(' : ')
        products.push({name, price})
    }

    products.sort((a, b) => a.name.localeCompare(b.name))

    let curLetter = ''

    for(let product of products){

        if(product.name[0] != curLetter){
            curLetter = product.name[0]
            console.log(curLetter);
        }
        console.log(`  ${product.name}: ${product.price}`);
    }

}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])

catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'])
class Storage {

    
    constructor(capacity){

        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }

    addProduct(productToAdd){

        this.storage.push(productToAdd)
        this.capacity -= productToAdd.quantity
        this.totalCost += productToAdd.price*productToAdd.quantity
    }

    getProducts(){

        return this.storage
        .map(product => JSON.stringify(product))
        .join('\n')
    }
}

let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);

// let productOne = {name: 'Tomato', price: 0.90, quantity: 19};
// let productTwo = {name: 'Potato', price: 1.10, quantity: 10};
// let storage = new Storage(30);
// storage.addProduct(productOne);
// storage.addProduct(productTwo);
// console.log(storage.totalCost);

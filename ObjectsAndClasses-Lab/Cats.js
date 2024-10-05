function cats(array){

    let cats = []

    class Cat {

        constructor(name, age) {

            this.name = name
            this.age = age
        }

        meow(){

            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    for(let cat of array){

        let [catName, catAge] = cat.split(' ')

        let newCat = new Cat(catName, Number(catAge))
        cats.push(newCat)
    }

    cats.map(cat => cat.meow())
}

cats(['Mellow 2', 'Tom 5'])

cats(['Candy 1', 'Poppy 3', 'Nyx 2'])
function city(object){

    let keys = Object.keys(object)
    for(let key of keys){

        console.log(`${key} -> ${object[key]}`)
    }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})

city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
})
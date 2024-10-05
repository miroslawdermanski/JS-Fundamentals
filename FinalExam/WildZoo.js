function wildZoo(input) {
    let animals = {};
    let areas = {};
    let command = input.shift();

    while (command !== 'EndDay') {
        command = command.split(': ');
        let action = command.shift();
        
        if (action === 'Add') {
            let [animalName, neededFoodQty, area] = command[0].split('-');
            neededFoodQty = Number(neededFoodQty);

            if (animalName in animals) {
                animals[animalName].food += neededFoodQty;
            } else {
                animals[animalName] = { food: neededFoodQty, area: area };
                if (!(area in areas)) {
                    areas[area] = new Set();
                }
                areas[area].add(animalName);
            }
        } else if (action === 'Feed') {
            let [animalName, foodQty] = command[0].split('-');
            foodQty = Number(foodQty);

            if (animalName in animals) {
                animals[animalName].food -= foodQty;
                if (animals[animalName].food <= 0) {
                    console.log(`${animalName} was successfully fed`);
                    let area = animals[animalName].area;
                    delete animals[animalName];
                    areas[area].delete(animalName);
                    if (areas[area].size === 0) {
                        delete areas[area];
                    }
                }
            }
        }
        command = input.shift();
    }

    console.log('Animals:');
    for (let animalName in animals) {
        console.log(` ${animalName} -> ${animals[animalName].food}g`);
    }

    console.log('Areas with hungry animals:');
    for (let area in areas) {
        if (areas[area].size > 0) {
            console.log(` ${area}: ${areas[area].size}`);
        }
    }
}

wildZoo(["Add: Adam-4500-ByTheCreek",
    "Add: Maya-7600-WaterfallArea",
    "Add: Maya-1230-WaterfallArea",
    "Feed: Jamie-2000",
    "EndDay"])
    
wildZoo(["Add: Jamie-600-WaterfallArea",
    "Add: Maya-6570-WaterfallArea",
    "Add: Adam-4500-ByTheCreek",
    "Add: Bobbie-6570-WaterfallArea",
    "Feed: Jamie-2000",
    "Feed: Adam-2000",
    "Feed: Adam-2500",
    "EndDay"])
    
wildZoo(["Add: Bonie-3490-RiverArea",
    "Add: Sam-5430-DeepWoodsArea",
    "Add: Bonie-200-RiverArea",
    "Add: Maya-4560-ByTheCreek",
    "Feed: Maya-2390",
    "Feed: Bonie-3500",
    "Feed: Johny-3400",
    "Feed: Sam-5500",
    "EndDay"])        
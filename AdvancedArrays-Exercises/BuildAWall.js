function buildWall(sections){

    sections.sort((a, b) => a - b)

    let concretePerDay = []
    let finalCost = 0
    
    let day = 1

    while(sections.filter(element => element < 30).length > 0){

        let concreteForCurDay = 0
        for(let section of sections){

            let idx = sections.indexOf(section)
            if(section < 30){
                section++; 
                sections.splice(idx, 1, section)
                concreteForCurDay += 195; 
            }
        }
        finalCost += concreteForCurDay*1900
        concretePerDay.push(concreteForCurDay)

        day++
    }
    console.log(concretePerDay.join(', '));
    console.log(`${finalCost} pesos`);
    
}

buildWall([21, 25, 28])

buildWall([17])

buildWall([17, 22, 17, 19, 17])
function serializeString(input){

    let serializedAssArr = {}
    input = input.shift()

    for(let i = 0; i < input.length; i++){

        if(input[i] in serializedAssArr){
            serializedAssArr[input[i]].push(i)
        } else {
            serializedAssArr[input[i]] = [i]
        }
    }

    for(let [key, value] of Object.entries(serializedAssArr)){
        let result = `${key}:`
        value.forEach(x => {
            result += `${x}`
            if(value.indexOf(x) != value.length-1) result += '/'
        });
        console.log(result)
    }
}

serializeString(["abababa"])

serializeString(["avjavamsdmcalsdm"])
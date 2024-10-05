function treasureFinder(input){

    let keys = input.shift().split(' ').map(Number)

    let curStr = input.shift()
    while(curStr != 'find'){
        curStr = curStr.split('')
        let curKeyIdx = 0
        for(let curChar = 0; curChar < curStr.length; curChar++){
            let newCharCode = curStr[curChar].charCodeAt()-keys[curKeyIdx]
            curKeyIdx = (curKeyIdx + 1) % keys.length;
            let newChar = String.fromCharCode(newCharCode)
            curStr.splice(curChar, 1, newChar)
        }
        curStr = curStr.join('')
        curStr = curStr.split('&')
        let type = curStr[1]
        let location = curStr[2].split('<')[1].replace('>', '')
        console.log(`Found ${type} at ${location}`);
        curStr = input.shift()
    }
}

treasureFinder(["1 2 1 3",
                "ikegfp'jpne)bv=41P83X@",
                "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
                "find"])

treasureFinder(["1 4 2 5 3 2 1",
                `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
                "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
                "'stj)>34W68Z@",
                "find"])
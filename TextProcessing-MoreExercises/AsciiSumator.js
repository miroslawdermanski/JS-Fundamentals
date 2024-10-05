// function asciiSumator(input){

//     let char1Code = input.shift().charCodeAt(0)
//     let char2Code = input.shift().charCodeAt(0)
//     let string = input.shift()

//     let start = Math.min(char1Code, char2Code)
//     let end = Math.max(char1Code, char2Code)

//     let sum = 0
//     for(let i = 0; i < string.length; i++){
//         let curCharCode = string.charCodeAt(i)
//         if(curCharCode > start && curCharCode < end){
//             sum += curCharCode
//         }
//     }
//     console.log(sum);
// }

function asciiSumator(input){

    let char1Code = input.shift().charCodeAt(0)
    let char2Code = input.shift().charCodeAt(0)
    let string = input.shift()

    let start = Math.min(char1Code, char2Code)
    let end = Math.max(char1Code, char2Code)

    let sum = 0
    string.split('').forEach(char => {
        if(char.charCodeAt(0) > start && char.charCodeAt(0) < end){
            sum += char.charCodeAt(0)
        }
    })
    console.log(sum);
}

asciiSumator(['.',
            '@',
            'dsg12gr5653feee5'])

asciiSumator(['?',
            'E',
            '@ABCEF'])

asciiSumator(['a',
            '1',
            'jfe392$#@j24ui9ne#@$'])
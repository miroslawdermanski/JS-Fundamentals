function passwordGenerator(array){

    let stringOne = array[0]
    let stringTwo = array[1]
    let stringThree = array[2]

    let password = stringOne.concat(stringTwo)
    let pattern = /[aeiou]/
    
    let changedVowelsCount = 0
    for(let i = 0; i < password.length; i++){

        if(pattern.test(password[i])){
            let letter = stringThree[changedVowelsCount].toUpperCase()
            password = password.replace(password[i], letter)
            changedVowelsCount++
            if(changedVowelsCount == stringThree.length) changedVowelsCount = 0
        }
    }
    password = password.split('').reverse().join('')
    console.log(`Your generated password is ${password}`);
}

passwordGenerator([
    'ilovepizza', 
    'ihatevegetables',
    'orange'])

passwordGenerator([
    'easymoneyeazylife', 
    'atleasttencharacters', 
    'absolute'])

passwordGenerator([
    'areyousureaboutthisone', 
    'notquitebutitrustyou', 
    'disturbed'])
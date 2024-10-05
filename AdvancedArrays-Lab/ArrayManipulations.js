function arrayManipulations(input){

    let array = input[0].split(' ').map(Number)

    for(let curOperation = 1; curOperation < input.length; curOperation++){

        let commandArray = input[curOperation].split(' ')
        
        let action = commandArray.shift()
        switch(action){

            case 'Add': array.push(Number(commandArray.pop())); 
            break

            case 'Remove': 
            let num = Number(commandArray.shift())
            array = array.filter(element => element !== num); 
            break

            case 'RemoveAt': 
            let indexRem = Number([commandArray.pop()])
            array.splice(indexRem, 1);
            break

            case 'Insert': 
            let indexIns = Number([commandArray.pop()])
            let number = Number([commandArray.pop()])
            array.splice(indexIns, 0, number); break
        }
    }
    console.log(array.join(' '));

}

arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)
arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']
)
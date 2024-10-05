function addAndRemove(array){

    let initialNum = 1

    let myArray = []

    for(let element of array){

        switch(element){

            case 'add': myArray.push(initialNum);break
            case 'remove': myArray.pop();break
        }
        initialNum++
    }
    console.log(myArray.length > 0 ? myArray.join(' ') : 'Empty');

}

addAndRemove(['add', 'add', 'add', 'add'])
addAndRemove(['add', 'add', 'remove', 'add', 'add'])
addAndRemove(['remove', 'remove', 'remove'])
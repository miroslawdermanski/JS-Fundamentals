function tour(input){

    let stops = input.shift()

    let command = input.shift()
    while(command != 'Travel'){
        command = command.split(':')
        let action = command.shift()
        if(action == 'Add Stop'){
            let [index, string] = command
            if(stops[index] != undefined){
                stops = stops.split('')
                stops.splice(index, 0, string)
                stops = stops.join('')
            }
        } else if(action == 'Remove Stop'){
            let [startIdx, endIdx] = command
            if(stops[startIdx] != undefined && stops[endIdx++] != undefined){
                let subStr = stops.substring(startIdx, endIdx)
                stops = stops.replace(subStr, '')
            }
        } else if(action == 'Switch'){
            let [oldString, newString] = command
            if(oldString !== ''){
              stops = stops.split(oldString).join(newString)
            }
        }
        console.log(stops);
        command = input.shift()
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}

tour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])    

tour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])
    
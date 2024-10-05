function meetings(array){

    let meetings = {}

    for(let string of array){

        let [weekday, name] = string.split(' ')
        if(!meetings[weekday]){

            meetings[weekday] = name
            console.log(`Scheduled for ${weekday}`);
        } else {

            console.log(`Conflict on ${weekday}!`)
        }
    }

    for(let weekday in meetings){

        console.log(`${weekday} -> ${meetings[weekday]}`);
    }

}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])

meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George'])
function astra(input){

    let txt = input.shift()
    const foodPattern = /(#|\|){1}(?<name>[A-Za-z\s]+)\1(?<exDate>\d{2}\/\d{2}\/\d{2})\1(?<cals>\d+)\1/gm

    let totalCals = 0
    let items = []

    let match = foodPattern.exec(txt)
    while (match !== null) {
        let {name, exDate, cals} = match.groups
        totalCals += Number(cals)
        items.push({name, exDate, cals})
        match = foodPattern.exec(txt)
    }
    console.log(`You have food to last you for: ${parseInt(totalCals/2000)} days!`);
    items.forEach(item => {
        console.log(`Item: ${item.name}, Best before: ${item.exDate}, Nutrition: ${item.cals}`)
    })
}

astra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ])

astra([ 
    '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' 
    ])

astra(['Hello|#Invalid food#19/03/20#450|$5*(@' ])
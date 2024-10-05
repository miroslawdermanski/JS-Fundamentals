function furniture(input){

    let regExPattern = />>([A-Za-z]+)<<(\d+[.,]?\d+)!(\d+)/
    let boughtFurniture = []
    let totalMoney = 0
    let curLine = input.shift()

    while(curLine != 'Purchase'){
        let match = regExPattern.exec(curLine)
        if(match){      
            boughtFurniture.push(match[1])
            totalMoney += Number(match[2]) * Number(match[3])
        }
        curLine = input.shift()
    }
    console.log('Bought furniture:')
    boughtFurniture.forEach(x => console.log(x))
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`)
}

furniture(['>>Sofa<<312.23!3',
            '>>TV<<300!5',
            '>Invalid<<!5',
            'Purchase'])

furniture(['>>Laptop<<312.2323!3',
            '>>TV<<300.21314!5',
            '>Invalid<<!5',
            '>>TV<<300.21314!20',
            '>>Invalid<!5',
            '>>TV<<30.21314!5',
            '>>Invalid<<!!5',
            'Purchase'])
 
furniture(['>Invalid<<!4',
            '>Invalid<<!2',
            '>Invalid<<!5',
            'Purchase'])            
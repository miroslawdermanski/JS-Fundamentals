function buyBitcoinWithMinedGold(input){

    let totalGramsGold = 0
    let minedFrstBitcoin = false
    let minedFrstBitcoinDay = 0
    
    let index = 0
    while(index < input.length){

        let goldMinedForCurrDay = Number(input[index])
        if((index+1) % 3 == 0){
            goldMinedForCurrDay = 0.70 * goldMinedForCurrDay
        }

        totalGramsGold += goldMinedForCurrDay

        if(!minedFrstBitcoin){
            if(totalGramsGold*67.51 >= 11949.16){
                minedFrstBitcoinDay = index + 1
                minedFrstBitcoin = true
            }
        }

        index++
    }
    let totalBoughtBitcoin = parseInt((totalGramsGold*67.51)/11949.16)
    console.log(`Bought bitcoins: ${totalBoughtBitcoin}`);
    if(minedFrstBitcoin){
        console.log(`Day of the first purchased bitcoin: ${minedFrstBitcoinDay}`);
    }
    let moneyLeft = (totalGramsGold*67.51)-(totalBoughtBitcoin*11949.16)
    console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`);
}

buyBitcoinWithMinedGold([3124.15, 504.212, 2511.124])
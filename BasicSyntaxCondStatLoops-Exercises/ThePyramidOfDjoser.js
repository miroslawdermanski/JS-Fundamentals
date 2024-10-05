function workOutResources(base, increment){

    let stone = 0
    let marble = 0
    let lapis = 0
    let gold = 0

    let height = 0
    let currentLayer = 1

    for(let currentSize = base; currentSize > 0; currentSize -= 2){

        height += increment

        let totalAreaOfCurrentSize = currentSize ** 2

        if(currentSize <= 2){
            gold = totalAreaOfCurrentSize * increment
        } else {
         
            let stoneArea = ((currentSize - 2) ** 2)
            stone += stoneArea * increment
            if(currentLayer % 5 == 0){
                let lapisArea = totalAreaOfCurrentSize-stoneArea
                lapis += lapisArea * increment
            } else {
                let marbleArea = totalAreaOfCurrentSize-stoneArea
                marble += marbleArea * increment
            }
                      
        }
        currentLayer++
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);

}

workOutResources(12, 1)
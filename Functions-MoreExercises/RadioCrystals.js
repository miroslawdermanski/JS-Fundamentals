function radioCrystals(input){

    let targetThickness = input[0]

    for(let curCrystalChunk = 1; curCrystalChunk < input.length; curCrystalChunk++){

        let curChunkThickness = input[curCrystalChunk]
        console.log(`Processing chunk ${curChunkThickness} microns`);
    
        if(curChunkThickness >= targetThickness*4){
            
            cutChunk(curChunkThickness)
        }
        if(curChunkThickness >= targetThickness*1.2){

            lapChunk(curChunkThickness)
        }  
        if(curChunkThickness >= targetThickness+20){

            grindChunk(curChunkThickness)
        }  
        if(curChunkThickness >= targetThickness+1){

            etchChunk(curChunkThickness)
        }
        if(curChunkThickness == targetThickness-1){

            xrayChunk(curChunkThickness)
        }
        console.log(`Finished crystal ${curChunkThickness} microns`);
        
        function cutChunk(chunk){

            let cutCounter = 0
                while(curChunkThickness >= targetThickness*4){
    
                    curChunkThickness /= 4
                    cutCounter++
                }
                console.log(`Cut x${cutCounter}`);
                curChunkThickness = Math.floor(curChunkThickness)
                console.log('Transporting and washing');
        }
    
        function lapChunk(chunk){
    
            let lapCounter = 0
                while(curChunkThickness >= targetThickness*1.2){
    
                    curChunkThickness -= 0.2*curChunkThickness
                    lapCounter++
                }
                console.log(`Lap x${lapCounter}`);
                curChunkThickness = Math.floor(curChunkThickness)
                console.log('Transporting and washing');
        }
    
        function grindChunk(chunk){
    
            let grindCounter = 0
                while(curChunkThickness >= targetThickness+20){
    
                    curChunkThickness -= 20
                    grindCounter++
                }
                console.log(`Grind x${grindCounter}`);
                curChunkThickness = Math.floor(curChunkThickness)
                console.log('Transporting and washing');
        }
    
        function etchChunk(chunk){
    
            let etchCounter = 0
                while(curChunkThickness >= targetThickness+1){
    
                    curChunkThickness -= 2
                    etchCounter++
                }
                console.log(`Etch x${etchCounter}`);
                curChunkThickness = Math.floor(curChunkThickness)
                console.log('Transporting and washing');
        }
    
        function xrayChunk(chunk){
    
            curChunkThickness += 1
            console.log(`X-ray x1`);
        }
    }

}

radioCrystals([1375, 50000])
//radioCrystals([1000, 4000, 8100])
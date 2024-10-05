function barcodes(input){

    let barcodeCount = Number(input.shift())
    let pattern = /@#+(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/

    for(let i = 0; i < barcodeCount; i++){

        let curBarcode = input[i]
        let match = pattern.exec(curBarcode)
        if(!match){
            console.log('Invalid barcode');
            continue
        }
        let prodGroup = match.groups.barcode
        let productGroup = prodGroup.split('').filter(char => !isNaN(char))
        .join('')
        if(productGroup == '') productGroup = '00'
        console.log(`Product group: ${productGroup}`);
    }
}

barcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])
    

barcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])    
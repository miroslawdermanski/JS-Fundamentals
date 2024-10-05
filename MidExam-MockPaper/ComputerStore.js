function computerStore(array){

    let totalBill = 0
    let totalBillPlusTaxes = 0
    let customerType = ''

    for(let itemPrice of array){

        if(itemPrice == 'special' || itemPrice == 'regular'){

            if(itemPrice == 'special') customerType = itemPrice
            break;
        }

        if(itemPrice < 0){
            console.log('Invalid price!');
            continue;
        }

        totalBill += Number(itemPrice)
        totalBillPlusTaxes += Number(itemPrice)*1.2
    }  
    if(totalBill <= 0){
        console.log('Invalid order!');        
    } else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${totalBill.toFixed(2)}$`);
        console.log(`Taxes: ${(totalBillPlusTaxes-totalBill).toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${(customerType == 'special' ? totalBillPlusTaxes*= 0.9: totalBillPlusTaxes).toFixed(2)}$`);
    }
}

computerStore(([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special']))

computerStore(([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular']))

computerStore(([
    'regular']))
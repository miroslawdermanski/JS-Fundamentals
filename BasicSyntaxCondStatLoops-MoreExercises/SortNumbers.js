function sortNumbers(num1, num2, num3){

    let numbersArray = [num1, num2, num3];
    numbersArray.sort().reverse();
    
    console.log(`${numbersArray[0]}\n${numbersArray[1]}\n${numbersArray[2]}`);

}

sortNumbers(2,1,3)
sortNumbers(-2,1,3)
sortNumbers(0,0,2)
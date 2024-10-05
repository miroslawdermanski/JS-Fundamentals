function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){

    let totalExpenses = 0; 
    let brokenShieldsCount = 0
    for(let currentLostFight = 1; currentLostFight <= lostFights; currentLostFight++){

        if(currentLostFight % 2 == 0 && currentLostFight % 3 == 0){
            totalExpenses += helmetPrice + swordPrice + shieldPrice;
            brokenShieldsCount++;
            if(brokenShieldsCount % 2 == 0){
                totalExpenses += armorPrice;
            }
        } else if(currentLostFight % 2 == 0){
            totalExpenses += helmetPrice;
        } else if(currentLostFight % 3 == 0){
            totalExpenses += swordPrice;
        }
    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);

}

gladiatorExpenses(7, 2, 3, 4, 5)
gladiatorExpenses(23, 12.50, 21.50, 40, 200)
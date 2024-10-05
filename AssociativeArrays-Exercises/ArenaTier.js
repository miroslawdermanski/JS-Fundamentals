function arenaTier(list){

    let gladiatorsList = {};

    for(let string of list){

        if (string.includes('->')) {

            const [name, technique, skill] = string.split(' -> ')
            .map(string => isNaN(string) ? string : Number(string));

            if(!gladiatorsList[name]) gladiatorsList[name] = {}
            gladiatorsList[name][technique] = Math.max(skill, gladiatorsList[name][technique] || 0);

        } else if (string.includes(' vs ')) {

            const [gladiatorOneName, gladiatorTwoName] = string.split(' vs ');

            if (gladiatorsList[gladiatorOneName] && gladiatorsList[gladiatorTwoName]) {
                const foundSkills = Object.keys(gladiatorsList[gladiatorOneName])
                    .filter(skill => gladiatorsList[gladiatorTwoName].hasOwnProperty(skill));

                if (foundSkills.length !== 0) {

                    const gladiatorOnePower = Object.values(gladiatorsList[gladiatorOneName]).reduce((acc, val) => acc + val, 0);
                    const gladiatorTwoPower = Object.values(gladiatorsList[gladiatorTwoName]).reduce((acc, val) => acc + val, 0);

                    if (gladiatorOnePower > gladiatorTwoPower) {
                        delete gladiatorsList[gladiatorTwoName];
                    } else {
                        delete gladiatorsList[gladiatorOneName];
                    }
                }
            }
        }
    }

    const sortedGladiators = Object.entries(gladiatorsList).sort(([aKey, aValue], [bKey, bValue]) => {
        const aSum = Object.values(aValue).reduce((acc, val) => acc + val, 0);
        const bSum = Object.values(bValue).reduce((acc, val) => acc + val, 0);
        return bSum - aSum;
    });

    sortedGladiators.forEach(([gladiator, skills]) => {
        console.log(`${gladiator}: ${Object.values(skills).reduce((acc, skill) => acc + skill, 0)} skill`);
        const sortedSkills = Object.entries(skills)
            .sort(([aSkill, aPoints], [bSkill, bPoints]) => bPoints - aPoints || aSkill.localeCompare(bSkill));
        sortedSkills.forEach(([skill, points]) => {
            console.log(`- ${skill} <!> ${points}`);
        });
    });
}

arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'])

arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'])
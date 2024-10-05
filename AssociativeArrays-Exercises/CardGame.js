function cardGame(array){

    let types = { S: 4, H: 3, D: 2, C: 1 }
    let powers = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 
        8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 14}

    let peopleSequence = {}

    for(let string of array){

        let [name, cards] = string.split(': ');

        cards = cards.split(', ')
        cards = cards.filter((element, index) => cards.indexOf(element) == index)

        if(peopleSequence[name]){
            peopleSequence[name] = peopleSequence[name].concat(cards)
        } else {

            peopleSequence[name] = cards
        }
    }

    for(let person in peopleSequence){

        peopleSequence[person] = peopleSequence[person].filter((element, index) => peopleSequence[person].indexOf(element) == index)

        let value = 0
        for(let card of peopleSequence[person]){

            card = card.split('')
            let type = card.pop()
            let power = card.join('')
            value += powers[power] * types[type]
        }

        peopleSequence[person] = value
    }

    Object.entries(peopleSequence).forEach(person => console.log(`${person[0]}: ${person[1]}`))
}


cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'])

cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'])
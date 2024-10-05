function partyTime(array){

    let guestList = {
        VIP: [],
        REGULAR: []
    }

    let curGuest = array.shift()
    while(curGuest != 'PARTY'){

        if(Number.isInteger(Number(curGuest[0]))){

            guestList.VIP.push(curGuest)
        } else {

            guestList.REGULAR.push(curGuest)
        }

        curGuest = array.shift()
    }

    for(let guest of array){

        if(guestList.VIP.includes(guest)){

            let idx = guestList.VIP.indexOf(guest)
            guestList.VIP.splice(idx, 1)
        } else if(guestList.REGULAR.includes(guest)){

            let idx = guestList.REGULAR.indexOf(guest)
            guestList.REGULAR.splice(idx, 1)
        }
    }

    let guestCount = guestList.VIP.length + guestList.REGULAR.length;
    console.log(guestCount)

    let mergedList = guestList.VIP.concat(guestList.REGULAR)
    .forEach(guest => console.log(guest))
}

partyTime(['7IK9Yo0h',
            '9NoBUajQ',
            'Ce8vwPmE',
            'SVQXQCbc',
            'tSzE5t0p',
            'PARTY',
            '9NoBUajQ',
            'Ce8vwPmE',
            'SVQXQCbc'])

partyTime(['m8rfQBvl',
            'fc1oZCE0',
            'UgffRkOn',
            '7ugX7bm0',
            '9CQBGUeJ',
            '2FQZT3uC',
            'dziNz78I',
            'mdSGyQCJ',
            'LjcVpmDL',
            'fPXNHpm1',
            'HTTbwRmM',
            'B5yTkMQi',
            '8N0FThqG',
            'xys2FYzn',
            'MDzcM9ZK',
            'PARTY',
            '2FQZT3uC',
            'dziNz78I',
            'mdSGyQCJ',
            'LjcVpmDL',
            'fPXNHpm1',
            'HTTbwRmM',
            'B5yTkMQi',
            '8N0FThqG',
            'm8rfQBvl',
            'fc1oZCE0',
            'UgffRkOn',
            '7ugX7bm0',
            '9CQBGUeJ'])
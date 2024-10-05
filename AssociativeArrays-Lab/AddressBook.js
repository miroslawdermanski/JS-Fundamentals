function addressBook(array){

    let addressBook = {};

    for(let string of array){

        let [name, address] = string.split(':');
        addressBook[name] = address
    }

    let sortedBookNames = Object.keys(addressBook).sort((a, b) => a.localeCompare(b))

    for(let name of sortedBookNames){

        console.log(`${name} -> ${addressBook[name]}`);
    }
}

addressBook(['Tim:Doe Crossing',
            'Bill:Nelson Place',
            'Peter:Carlyle Ave',
            'Bill:Ornery Rd'])

addressBook(['Bob:Huxley Rd',
            'John:Milwaukee Crossing',
            'Peter:Fordem Ave',
            'Bob:Redwing Ave',
            'George:Mesta Crossing',
            'Ted:Gateway Way',
            'Bill:Gateway Way',
            'John:Grover Rd',
            'Peter:Huxley Rd',
            'Jeff:Gateway Way',
            'Jeff:Huxley Rd'])
function matchNames(input){

    const regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    const matches = input.match(regex);
    let names = []
    if (matches) {
        matches.forEach(match => names.push(match));
    }
    console.log(names.join(' '));

}

matchNames("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")
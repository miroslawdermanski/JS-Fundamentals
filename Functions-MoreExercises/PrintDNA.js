function printDNA(num){

    let length = num

    const sequence = "ATCGTTAGGG";
    let seqIndex = 0;

    for (let i = 0; i < length; i++) {
        let currentPair = sequence[seqIndex] + sequence[(seqIndex + 1) % sequence.length];
        seqIndex = (seqIndex + 2) % sequence.length;

        if (i % 4 === 0) {
            console.log(`**${currentPair}**`);
        } else if (i % 4 === 1) {
            console.log(`*${currentPair[0]}--${currentPair[1]}*`);
        } else if (i % 4 === 2) {
            console.log(`${currentPair[0]}----${currentPair[1]}`);
        } else if (i % 4 === 3) {
            console.log(`*${currentPair[0]}--${currentPair[1]}*`);
        }
    }
}

//printDNA(4)
printDNA(10)
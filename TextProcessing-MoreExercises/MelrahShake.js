function melrahShake(input) {
    let [string, pattern] = input;

    while (pattern.length > 0) {
        let firstMatchIdx = string.indexOf(pattern);
        let lastMatchIdx = string.lastIndexOf(pattern);

        if (!(firstMatchIdx !== -1 && firstMatchIdx !== lastMatchIdx)) {
            break;
        }

        // Remove the first occurrence of the pattern
        string = string.slice(0, firstMatchIdx) + string.slice(firstMatchIdx + pattern.length);
        // Recalculate the lastMatch because the string length has changed
        lastMatchIdx = string.lastIndexOf(pattern);
        // Remove the last occurrence of the pattern
        string = string.slice(0, lastMatchIdx) + string.slice(lastMatchIdx + pattern.length);

        // Remove the character from the middle of the pattern
        let removeFromPatt = pattern[Math.floor(pattern.length / 2)];
        pattern = pattern.replace(removeFromPatt, '');
        
        console.log('Shaked it.');
    }

    console.log('No shake.');
    console.log(string);
}

melrahShake(['astalavista baby',
            'sta'])

melrahShake(['##mtm!!mm.mm*mtm.#',
            'mtm'])
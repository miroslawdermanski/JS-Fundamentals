function findDates(input) {
    const regex = /\b(?<day>\d{2})(?<sep>[./-])(?<month>[A-Z][a-z]{2})\k<sep>(?<year>\d{4})\b/g;
    const matches = input[0].matchAll(regex);
    for (const match of matches) {
        const { day, month, year } = match.groups;
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }
}

// Test the function with provided examples
const input1 = ['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'];
findDates(input1);
// Expected output:
// Day: 13, Month: Jul, Year: 1928
// Day: 10, Month: Nov, Year: 1934
// Day: 25, Month: Dec, Year: 1937

const input2 = ['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014'];
findDates(input2);
// Expected output:
// Day: 11, Month: Dec, Year: 2010
// Day: 18, Month: Jan, Year: 2014

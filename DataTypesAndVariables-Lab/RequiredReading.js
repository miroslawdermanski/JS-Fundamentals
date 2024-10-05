function calcHoursReading(currentBookPages, pagesRedIn1Hour, daysToReadBook){

    let totalTimeToReadBook = currentBookPages / pagesRedIn1Hour
    console.log(`${totalTimeToReadBook / daysToReadBook}`);
}

calcHoursReading(212, 20, 2)
calcHoursReading(432, 15, 4)
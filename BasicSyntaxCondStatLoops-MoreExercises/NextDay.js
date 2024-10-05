function nextDay(year, month, day){

    let givenDate = new Date(year, month - 1, day)
    let oneDay = 24 * 60 * 60 * 1000
    let nextDate = new Date(givenDate.getTime() + oneDay)
    console.log(nextDate.getFullYear() + '-' + 
                (nextDate.getMonth() + 1) + '-' + 
                nextDate.getDate());

}

nextDay(2016, 9, 30)
nextDay(2020, 3, 24)
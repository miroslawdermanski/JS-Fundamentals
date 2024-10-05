function dayOfWeek(num){

    let weekAsArray = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

    console.log(weekAsArray[num-1]? weekAsArray[num-1]: 'Invalid day!');
}

dayOfWeek(3)
dayOfWeek(6)
dayOfWeek(11)
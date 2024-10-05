function workOutTotalAmount(peopleGroup, groupType, dayOfTheWeek){

    let totalAmount = 0

    switch(groupType){

        case 'Students':
            switch(dayOfTheWeek){
                case 'Friday':
                    totalAmount = 8.45 * peopleGroup; break;
                case 'Saturday':
                    totalAmount = 9.80 * peopleGroup; break;
                case 'Sunday':
                    totalAmount = 10.46 * peopleGroup; break;
            } break;

        case 'Business':
            switch(dayOfTheWeek){
                case 'Friday':
                    totalAmount = 10.90 * peopleGroup; break;
                case 'Saturday':
                    totalAmount = 15.60 * peopleGroup; break;
                case 'Sunday':
                    totalAmount = 16 * peopleGroup; break;
            } break;

        case 'Regular':
            switch(dayOfTheWeek){
                case 'Friday':
                    totalAmount = 15 * peopleGroup; break;
                case 'Saturday':
                    totalAmount = 20 * peopleGroup; break;
                case 'Sunday':
                    totalAmount = 22.50 * peopleGroup; break;
            } break;
    }

    if(groupType == 'Students' && peopleGroup >= 30){
        totalAmount = 0.85 * totalAmount
    } else if(groupType == 'Business' && peopleGroup >= 100){
        totalAmount = totalAmount - ((totalAmount/peopleGroup)*10)
    } else if(groupType == 'Regular' && peopleGroup >= 10 && peopleGroup <= 20){
        totalAmount = totalAmount * 0.95
    }
    console.log(`Total price: ${totalAmount.toFixed(2)}`);

}

workOutTotalAmount(40, "Regular", "Saturday")
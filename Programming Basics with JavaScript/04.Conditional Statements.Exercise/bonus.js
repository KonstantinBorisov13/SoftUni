function bonus(number) {
    number = Number(number);
    let bonus = 0;
    if(number <= 100) {
        bonus = 5
    } else if (number < 1000) {
        bonus = 0.20 * number

    } else if( number >= 1001) {
        bonus = 0.10 * number
    }


    if(number % 2 === 0) {
        bonus += 1
    }

    if( number % 10 === 5) {
        bonus += 2
    }

    console.log(bonus);
    console.log(number + bonus)
    
    



}

bonus("15875")


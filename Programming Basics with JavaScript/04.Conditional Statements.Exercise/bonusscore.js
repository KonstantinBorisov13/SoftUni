function bonusscore(number) {
    number = Number(number)
    let bonus = 0.0
    let result = number + bonus

    if( number <= 100) {
        bonus = 5
        console.log(bonus, 
            result)
    } else if( number > 100) {
        bonus = 0.2 * number
        console.log(bonus,
            result)
    } else if( number > 1000) {
    bonus = 0.1 * number
    console.log(bonus,
        result)
    }
    let tresult = bonus + result

    if( result % 2 == 0) {
        bonus = 1
        
    } if( result % 5 == 0) {
        bonus = 2
        console.log(bonus,
            tresult)
    }
   
}

bonusscore("20")
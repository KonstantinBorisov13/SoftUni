function number100to200(number) {
    
    number = Number(number)

    if( number < 100) {
        console.log("Less than 100")
    } else if( number <= 200) {
        console.log("Between 100 and 200")
    } else if( number > 200) {
        console.log("Greater than 200")
    }
    
}

number100to200("200")
function solve(group, type, day) {
    group = Number(group);
    let price = 0;

    if(type === "Students") {
        if(day === "Friday") {
            price = 8.45
        } else if ( day === "Saturday") {
            price = 9.80
        } else if (day === "Sunday") {
            price = 10.46
        }
        if( group >= 30) {
            price = price - price * 0.15
        }

    } else if(type === "Business") {
        if(day === "Friday") {
            price = 10.90
        } else if ( day === "Saturday") {
            price = 15.60
        } else if (day === "Sunday") {
            price = 16
        }
        if(group >= 100) {
            group -= 10

        }

    } else if(type === "Regular") {
        if(day === "Friday") {
            price = 15
        } else if ( day === "Saturday") {
            price = 20
        } else if (day === "Sunday") {
            price = 22.50
        }
        if(group >= 10 && group <= 20) {
            price = price - price * 0.05
        }

    }

    price = price * group
    console.log(`Total price: ${price.toFixed(2)}`);



}

solve(105,
    "Business",
    "Friday"
    
    )
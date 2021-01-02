function windows(countWindows, type, delivery) {
    countWindows = Number(countWindows)
    let price = 0;

    if(countWindows <= 10) {
        console.log("Invalid order")
        
    } else {
        if(type === "90X130") {
            price = 110;
            if( countWindows > 30 && countWindows < 60) {
                price *= 0.95
            } else if ( countWindows >= 61) {
                price *= 0.92
            }

        } else if(type === "100X150") {
            price = 140;
            if( countWindows > 40 && countWindows <= 80) {
                price *= 0.94
            } else if (countWindows >= 81) {
                price *= 0.90
            }
        } else if( type === "130X180") {
            price = 190;
            if( countWindows > 25 && countWindows < 50) {
                price *= 0.93
            } else if( countWindows >= 51) {
                price *= 0.88
            }
        } else if( type === "200X300") {
            price = 250;
            if( countWindows > 25 && countWindows < 50) {
                price *= 0.91
            } else if( countWindows >= 51) {
                price *= 0.86
            }
        }
    }
    price = price * countWindows
    if(countWindows > 10) {
       if(delivery === "With delivery") {
        price += 60;
    } else if(delivery === "Without delivery") {
        price = price
    }
}

    if( countWindows > 99) {
        price *= 0.96
    }

    if(countWindows > 10) {
    console.log(`${price.toFixed(2)} BGN`);
    }

}

windows("105",
    "100X150",
    "With delivery"
    )
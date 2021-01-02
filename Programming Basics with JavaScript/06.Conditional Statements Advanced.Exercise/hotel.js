function hotel(month, night) {
    night = Number(night)
    let priceApartment = 0;
    let priceStudio = 0;

    if( month === "May" || month === "October") {
        priceStudio = 50;
        priceApartment = 65;
    } else if( month === "June" || month === "September") {
        priceApartment = 68.70;
        priceStudio = 75.20;
    } else if( month === "July" || month === "August") {
        priceStudio = 76;
        priceApartment = 77;
    }

    if( night > 7 && month === "May" || month === "October") {
        priceStudio *= 0.95
    } else if (night > 14 && month === "May" || month === "October") {
        priceStudio *= 0.70
        priceApartment *= 0.90
    } else if( night > 14 && month === "June" || month === "September") {
        priceStudio *= 0.80
        priceApartment *= 0.90
    } else if( night > 14) {
        priceApartment *= 0.90
    }

    console.log(`Apartment: ${(priceApartment * night).toFixed(2)} lv.`);
    console.log(`Studio: ${(priceStudio * night).toFixed(2)} lv.`);
    
    


}

hotel("October",
"15")

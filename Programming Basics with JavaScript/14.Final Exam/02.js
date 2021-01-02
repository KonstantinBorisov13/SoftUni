function bags(priceBagsUp20, kilograms, days, countBags) {
    priceBagsUp20 = Number(priceBagsUp20);
    kilograms = Number(kilograms);
    days = Number(days);
    countBags = Number(countBags);
    let price = 0;

    if( kilograms < 10) {
        price = 0.20 * priceBagsUp20
    } else if( kilograms <= 20) {
        price = 0.50 * priceBagsUp20
    } else if( kilograms >= 21) {
        price = priceBagsUp20
    }

    if( days >= 31) {
        price = price + (price * 0.10);
    } else if ( days >= 7) {
        price = price + (price * 0.15);
    } else if ( days < 7) {
        price = price + (price * 0.40);
    }

    price = price * countBags

    console.log(`The total price of bags is: ${price.toFixed(2)} lv. `);
}

bags("25.50",
    "15",
    "10",
    "6")
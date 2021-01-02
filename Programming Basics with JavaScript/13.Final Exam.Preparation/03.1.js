function operator(term, type, net, months) {
    months = Number(months)
    let price = 0
 
 
    if (term === "one") {
        switch (type) {  
            case "Small": price = 9.98; break;
            case "Middle": price = 18.99; break;
            case "Large": price = 25.98; break;
            case "ExtraLarge": price = 35.99; break;
        }if (net === "yes") {
            if (price <= 10) {
                price += 5.50
            } else if (price <= 30) {
                price += 4.35
            } else if (price > 30) {
                price += 3.85
            }
 
        }
        let finalPrice = price * months
        console.log(`${finalPrice.toFixed(2)} lv.`)
 
    } else if (term === "two") {
        switch (type) {
            case "Small": price = 8.58; break;
            case "Middle": price = 17.09; break;
            case "Large": price = 23.59; break;
            case "ExtraLarge": price = 31.79; break;
        }if (net === "yes") {
            if (price <= 10) {
                price += 5.50
            } else if (price <= 30) {
                price += 4.35
            } else if (price > 30) {
                price += 3.85
            }
        }
        let final = price * months
        final -= final * 3.75 / 100
        console.log(`${final.toFixed(2)} lv.`)
    }
 
 
}
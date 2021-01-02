function fishing(budget, season, count) {
    budget = Number(budget)
    count = Number(count)
    let result = 0;

    if( season === "Spring") {
        result = 3000;

    } else if( season === "Summer" || season === "Autumn") {
        result = 4200;

    } else if( season === "Winter") {
    result = 2600;
    }
    if( count <= 6) {
        result *= 0.9;
    } else if ( count >= 7 && count <= 11) {
        result *= 0.85;

    } else {
        result *= 0.75;
    }
    
    if( count % 2 === 0 && season !== "Autumn") {
        result *= 0.95
    }

    let diff = budget - result;
    if ( budget >= result) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
        
    }else {
        console.log(`Not enough money! You need ${Math.abs(diff).toFixed(2)} leva.`);
        
    }



}

fishing("3000",
"Summer",
"11")

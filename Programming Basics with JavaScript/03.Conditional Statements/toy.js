function toy(priceHoliday, puzzles, dolls, bears, minions, trucks) {
    priceHoliday = Number(priceHoliday);
    puzzles = Number(puzzles);
    bears = Number(bears);
    minions = Number(minions);
    trucks = Number(trucks);
    dolls = Number(dolls)

    count = puzzles + bears + minions + trucks + dolls

    let pricePuzzles = 2.60 * puzzles
    let pricebears = 4.10 * bears
    let priceDolls = 3 * dolls
    let priceMinions = 8.20 * minions
    let priceTrucks = 2 * trucks

    total = pricePuzzles + priceDolls + pricebears + priceMinions + priceTrucks

    if( count >= 50) {
        total *= 0.75
    }

    newtotal = total * 0.90
    let diff = Math.abs(newtotal - priceHoliday)

    if( newtotal >= priceHoliday) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
        
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }
        
    
    }

toy("320", "8", "2", "5", "5", "1")
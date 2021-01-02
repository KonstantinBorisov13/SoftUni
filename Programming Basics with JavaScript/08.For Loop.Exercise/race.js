function race(fuelLitres, fuelUsed, totalLaps) {

    fuelLitres = Number(fuelLitres)
    fuelUsed = Number(fuelUsed)
    totalLaps = Number(totalLaps)

    for ( let lap = 0; lap < totalLaps; lap++) {
        fuelLitres -= fuelUsed - 0.1


        if( fuelLitres <= 0) {
            console.log(`You are out of fuel in round ${lap}!`)
            break;
        }
    }

    if( fuelLitres > 0) {
        console.log("Congrats! You won the race!");
        
    }

}

race("70", "6.5", "10")
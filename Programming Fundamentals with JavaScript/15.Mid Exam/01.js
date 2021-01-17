function pirate(days, plunderForADay, neededPlunder) {
    days = Number(days);
    plunderForADay = Number(plunderForADay);
    neededPlunder = Number(neededPlunder);
    let totalPlunder = 0;
    totalPlunder = days * plunderForADay;

    for (let i = 1; i <= days; i++) {
        i = Number(i)
        if (i == 3 || i == 6 || i == 9 || i == 12 || i == 15) {
            totalPlunder += plunderForADay * 0.5

        } if (i == 5 || i == 10 || i == 15 || i == 20) {
            totalPlunder *= 0.7
        }
    }

    if (totalPlunder >= neededPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else if (totalPlunder < neededPlunder) {
        let percentage = (totalPlunder * 100) / neededPlunder
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);

    }
}



pirate(10, 20, 380)
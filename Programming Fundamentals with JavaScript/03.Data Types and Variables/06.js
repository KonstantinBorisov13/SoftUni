function fuel(distance, passengers, priceForOneLitre) {
    distance = Number(distance);
    passengers = Number(passengers);
    priceForOneLitre = Number(priceForOneLitre);

    let neededFuel = (distance / 100) * 7
    neededFuel += passengers * 0.100

    let money = neededFuel * priceForOneLitre

    console.log(`Needed money for that trip is ${money}lv.`);

}

fuel(260, 9, 2.49)
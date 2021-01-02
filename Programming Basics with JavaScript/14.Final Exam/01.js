function solve(name, countAdult, countChild, priceAdult, tax) {
    countAdult = Number(countAdult);
    countChild = Number(countChild);
    priceAdult = Number(priceAdult);
    tax = Number(tax);
    let total = 0;

    let priceChild = priceAdult * 0.30;
    priceAdult += tax
    priceChild += tax

    total = (countChild * priceChild) + (countAdult * priceAdult)
    total *= 0.20

    console.log(`The profit of your agency from ${name} tickets is ${total.toFixed(2)} lv.`);

    
    

}

solve("WizzAir",
    "15",
    "5",
    "120",
    "40",
    )
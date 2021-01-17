function fruit(type, weight, price) {
    price = Number(price);
    weight = Number(weight);
    weight = weight / 1000;
    price = price * weight;

    console.log(`I need $${price.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${type}.`)

    
}

fruit('orange', 2500, 1.80)
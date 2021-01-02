function travel(input) {
    let index = 0;
    let budget = Number(input[index]);
    index++

    let command = input[index];
    index++
    let equipmantPrice = 0;
    let counter = 0;
    let isNegativeValue = false;

    while( command !== 'Stop') {
        counter++
        let productName = command;
        let productPrice = Number(input[index]);
        index++
        if(counter % 3 === 0) {
            equipmantPrice += (productPrice / 2)
        } else {
            equipmantPrice += productPrice
        }



        if(equipmantPrice > budget) {
            isNegativeValue = true;
            console.log(`You don't have enough money!`)
            console.log(`You need ${(equipmantPrice - budget).toFixed(2)} leva!`);
        }
        command = input[index];
        index++
    }
    console.log(`You bought ${counter} products for ${equipmantPrice} leva. `);


}

travel(['153.20',
    'Backpack',
    '25.20',
    'Shoes',
    '54',
    'Sunglasses',
    '30',
    'Stop'])
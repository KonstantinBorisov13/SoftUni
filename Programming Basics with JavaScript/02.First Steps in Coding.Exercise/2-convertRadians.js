function convertor(input) {
    // градус = радиан * 180 / п.

    input = Number(input);
    let degrees = input * 180 / Math.PI;

    let result = degrees.toFixed(0);
    console.log(result);
}

convertor("3.1416")
function cinema(type, rows, columns) {
    rows = Number(rows);
    columns = Number(columns);
    let totalSum = rows * columns
    let result = 0


    if( type === "Premiere") {
        result = 12 * totalSum;
    } else if( type === "Normal") {
        result = 7.50 * totalSum;
    } else if( type === "Discount") {
        result = 5 * totalSum
    }

    console.log(`${result.toFixed(2)} leva`);
    
}

cinema("Premiere",
"10",
"12")

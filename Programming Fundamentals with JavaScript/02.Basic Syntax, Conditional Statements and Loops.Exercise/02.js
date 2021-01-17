function solve(n, precision) {
    let result = 0;

    if(precision > 15) {
        precision = 15
    }

    n = n.toFixed(precision);
    console.log(parseFloat(n));


}

solve(3.1415926535897932384626433832795,2)
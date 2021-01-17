function solve(year) {
    year = Number(year);
    type = ""

    if(year >= 0 && year <= 2) {
        type = "baby"

    } else if ( year >= 3 && year <= 13) {
        type = "child"
    } else if ( year >= 14 && year <= 19) {
        type = "teenager"
    } else if( year >= 20 && year <= 65) {
        type = "adult"
    } else if ( year >= 66) {
        type = "elder"
    } else {
        type = "out of bounds"
    }
    console.log(type);

}

solve(20)


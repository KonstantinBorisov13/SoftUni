function letter(char) {
    let toUpper = char.toUpperCase()

    if(toUpper == char) {
        console.log("upper-case");
    } else {
        console.log("lower-case");
    }
}

letter("f")
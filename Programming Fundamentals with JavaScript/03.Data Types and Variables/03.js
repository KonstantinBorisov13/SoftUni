function solve(n1, n2, n3) {
    n1 = Number(n1)
    n2 = Number(n2)
    n3 = Number(n3)
    let sum = n1 + n2 + n3

    if(sum === Math.trunc(sum)) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
    


}

solve("9", "100", "1.1")